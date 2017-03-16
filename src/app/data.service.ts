import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) {}

  get(pId: number =57) {
    return this.http.get('http://pokeapi.co/api/v2/pokemon/' + pId)
    .map((response: Response) => {
      let updatedResponse = response.json()
      updatedResponse.name += '!¡¡!';
      return updatedResponse;
    })
  }

}
