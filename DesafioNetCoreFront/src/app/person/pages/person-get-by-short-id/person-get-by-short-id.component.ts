import { Component, inject } from '@angular/core';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-person-get-by-short-id',
  standalone: true,
  imports: [],
  templateUrl: './person-get-by-short-id.component.html',
  styleUrl: './person-get-by-short-id.component.scss'
})
export class PersonGetByShortIdComponent {

  private personService = inject(PersonService);
  private person$ = this.personService.getPersonByShortId("ss");
  
  onClick()
  {

  }
}
