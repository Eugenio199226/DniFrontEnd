import {Injectable} from "@angular/core";
import {Dni} from '../Dni';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicioDni
{
	private _dniUrl='localhost:8080/api/validar';
	constructor(private _http: HttpClient){}
	leerDni(dni:Dni): Observable<Dni>
	{
		return this._http.post<Dni>(this._dniUrl,dni);
		
	}
	
	
}