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

    getAllPersons()
    {
        return this.http.get<Person[]>(this.urlApi);
    }

    updatePerson(shortid: string, person: Person)
    {
        return this.http.put(`${this.urlApi}/${shortid}`, person)
    }
}