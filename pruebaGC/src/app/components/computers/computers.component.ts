import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Computer } from '../../models/computer';
import { ApiComputersService } from '../../services/api-computers.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css'],
})
export class ComputersComponent implements OnInit {
  //Semaphore to open edition
  isEditing = false;
  //array of computers
  computers: Computer[] = [];
  //init for computer
  computer: Computer = {
    _id: '',
    gce_nombre_equipo: '',
    gce_board: '',
    gce_case: '',
    gce_procesador: '',
    gce_grafica: '',
    gce_ram: '',
    gce_disco_duro: '',
    gce_teclado: '',
    gce_mouse: '',
    gce_pantalla: '',
    gce_estado: false,
  };

  //declaration pc without init - need to remove "!"
  pc!: FormGroup;

  constructor(private apiComputersService: ApiComputersService) {}

  //init to Groupform
  createForm() {
    this.pc = new FormGroup({
      gce_id: new FormControl(''),
      gce_nombre_equipo: new FormControl(''),
      gce_board: new FormControl(''),
      gce_case: new FormControl(''),
      gce_procesador: new FormControl(''),
      gce_grafica: new FormControl(''),
      gce_ram: new FormControl(''),
      gce_disco_duro: new FormControl(''),
      gce_teclado: new FormControl(''),
      gce_mouse: new FormControl(''),
      gce_pantalla: new FormControl(''),
      gce_estado: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.apiComputersService.getAll().subscribe((computers) => {
      this.computers = computers;
    });
  }
  //create new computer
  onCreate() {
    this.asign();
    this.apiComputersService.post(this.computer).subscribe(() => {
      this.apiComputersService.getAll().subscribe((computers) => {
        this.computers = computers;
      });
    });
  }
  //toogle is editing - asign computer to edition
  onEdit(id: string) {
    if (id) {
      this.computer = <Computer>this.computers.find((item) => id === item._id);
      this.isEditing = true;
    }
  }
  //Asign from form to computer
  asign() {
    this.computer = {
      _id: this.pc.controls.gce_id.value,
      gce_nombre_equipo: this.pc.controls.gce_nombre_equipo.value,
      gce_board: this.pc.controls.gce_board.value,
      gce_case: this.pc.controls.gce_case.value,
      gce_procesador: this.pc.controls.gce_procesador.value,
      gce_grafica: this.pc.controls.gce_grafica.value,
      gce_ram: this.pc.controls.gce_ram.value,
      gce_disco_duro: this.pc.controls.gce_disco_duro.value,
      gce_teclado: this.pc.controls.gce_teclado.value,
      gce_mouse: this.pc.controls.gce_mouse.value,
      gce_pantalla: this.pc.controls.gce_pantalla.value,
      gce_estado: this.pc.controls.gce_estado.value,
    };
  }
  //delete computer
  deleteComputer(id: string) {
    console.log(id);
    this.apiComputersService.delete(id).subscribe((item) => {
      this.computers.splice(
        this.computers.findIndex((item) => item._id === id),
        1
      );
    });
  }
  //Receipt output from child
  onModifyComputer(computer: Computer) {
    this.computer = computer;
    this.isEditing = !this.isEditing;
    this.apiComputersService
      .getAll()
      .subscribe((computers) => (this.computers = computers));
  }
}
