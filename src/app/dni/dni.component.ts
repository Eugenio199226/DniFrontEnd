import { Component, OnInit } from '@angular/core';
import {Dni} from '../Dni';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServicioDni} from './dni.service'
@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
  providers: [ServicioDni]
})
export class DniComponent implements OnInit {
  dni: Dni;
  constructor(private _servicioDni: ServicioDni) { }

  ngOnInit(){
    this._servicioDni.leerDni().subscribe(res => {
      console.log('Dni: '+res.dni);
      console.log('Codigo Error: '+res.codigoError);
      console.log('Mensaje: '+res.mensaje);
      this.dni = res;
    });
  }
}
