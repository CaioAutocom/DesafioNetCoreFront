import { Component, inject } from '@angular/core';
import { PersonService } from '../../person.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './person-get-all.component.html',
  styleUrl: './person-get-all.component.scss'
})

export class PersonGetAllComponent {
  private personService = inject(PersonService);
  protected persons$ = this.personService.getPersons();

  constructor(){
    this.persons$.subscribe(persons=>console.log(persons));
  }
}
