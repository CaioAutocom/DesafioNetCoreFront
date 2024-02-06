import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Person } from "./person.model";

@Injectable({
    providedIn: 'root'
})
export class PersonService
{
    private http = inject(HttpClient);
    private urlApi = `http://localhost:5132/person`

    getPersons()
    {
        return this.http.get<Person[]>(this.urlApi);
    }
}