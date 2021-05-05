import { Component, OnInit } from '@angular/core';
import {Pet} from '../../model/pet';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../service/pet.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {
  private _pet!: Pet;
  sendText: any;
  sendTextForm = this.formBuilder.group({
    name: ''
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private petService: PetService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const name = this.route.snapshot.params.name;
    this.petService.getPetByName(name).subscribe(pet => this._pet = pet);
  }

  get pet(): Pet {
    return this._pet;
  }

  onSubmit(): void {
    this.petService.getPopularity(this.pet.name).subscribe(
      () => this.router.navigate([''])
    );
    this.petService.sendText(this.sendTextForm.value).subscribe(
      () => this.sendTextForm.reset()
    );
  }
}
