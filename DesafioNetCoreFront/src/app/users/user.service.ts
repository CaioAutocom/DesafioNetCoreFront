import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private http = inject(HttpClient);
    private urlApi = `http://localhost:51900/users`

    getUsers()
    {
        return this.http.get
    }
}