import {Injectable} from "@angular/core";
import {Dni} from '../Dni';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicioDni
{
	private _dniUrl='assets/DniTest.json';
	constructor(private _http: HttpClient){}
	leerDni(): Observable<Dni>
	{
		return this._http.get<Dni>(this._dniUrl);
		
	}
	
	private manejarError(error: Response)
	{
		return Observable.throw(error.json() ||"error del servidor");
	}
}