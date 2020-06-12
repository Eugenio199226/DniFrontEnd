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
  dniIntroducido: Dni={"codigoError":0,"dni":"","mensaje":""};
  constructor(private _servicioDni: ServicioDni) { }

  ngOnInit(){
   
  }
  clickEvent()
  {
    this.dniIntroducido.codigoError=0;
    this.dniIntroducido.dni=(<HTMLInputElement>document.getElementById("txtDni")).value;
    this.dniIntroducido.mensaje="";
    this._servicioDni.leerDni(this.dniIntroducido).subscribe(res => {
      console.log('Dni: '+res.dni);
      console.log('Codigo Error: '+res.codigoError);
      console.log('Mensaje: '+res.mensaje);
    }),error=>
    {
		return Observable.throw(error.json() ||"error del servidor");
    };
    
  }
}
