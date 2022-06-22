import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Computer } from 'src/app/models/computer';
import { ApiComputersService } from '../../services/api-computers.service';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css'],
})
export class EditComputerComponent implements OnInit {
  //input computer from father
  @Input() computer!: Computer;
  //sending product but could be a boolean so need be changed to save resources
  @Output() computerModified = new EventEmitter<Computer>();
  //declaration of pc - need to remove "!"
  pc!: FormGroup;
  constructor(private apiComputersService: ApiComputersService) {}
  ngOnInit(): void {
    this.createForm();
    console.log(this.pc.controls);
  }

  onUpdate() {}
  //assign input computer to form
  createForm() {
    this.pc = new FormGroup({
      gce_id: new FormControl(this.computer._id),
      gce_nombre_equipo: new FormControl(this.computer.gce_nombre_equipo),
      gce_board: new FormControl(this.computer.gce_board),
      gce_case: new FormControl(this.computer.gce_case),
      gce_procesador: new FormControl(this.computer.gce_procesador),
      gce_grafica: new FormControl(this.computer.gce_grafica),
      gce_ram: new FormControl(this.computer.gce_ram),
      gce_disco_duro: new FormControl(this.computer.gce_disco_duro),
      gce_teclado: new FormControl(this.computer.gce_teclado),
      gce_mouse: new FormControl(this.computer.gce_mouse),
      gce_pantalla: new FormControl(this.computer.gce_pantalla),
      gce_estado: new FormControl(this.computer.gce_estado),
    });
  }
  //update computer an emit notification to father
  updateComputer() {
    this.assign();
    this.apiComputersService
      .put(this.computer._id, this.computer)
      .subscribe(() => {
        this.onModifyComputer();
      });
  }
  //assign form to computer
  assign() {
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
  //emitter to father
  onModifyComputer() {
    this.computerModified.emit(this.computer);
  }
}
