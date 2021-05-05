import {Component, OnInit} from '@angular/core';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/pet';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];
  petSelected: Pet | any;
  searchText: any;
  createPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  });
  popularity1: string | undefined;

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
    this.petSelected = undefined;
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(
      pets => this.pets = pets);
  }

  selectedPet(pet: Pet, event: Event): void {
    this.petSelected = pet;
    this.popularity1 = this.getPopularity(this.petSelected.popularity);
    event.stopPropagation();
  }

  onSubmit(): void {
    this.petService.addPet(this.createPetForm.value).subscribe(
      data => {
        console.warn('Your pet has been submitted', data);
        this.createPetForm.reset();
        this.getPets();
      }
    );
  }

  delete(pet: Pet): void {
    this.petSelected = pet;
    this.petService.deletePet(this.petSelected).subscribe(
      () => {
        this.getPets();
        this.petSelected = null;
      }
    );
  }

  getPopularity(pop: number): string {
    if (pop < 1) {
      return this.popularity1 = 'Freezing';
    } else if (pop < 3) {
      return this.popularity1 = 'Normal';
    } else if (pop < 5) {
      return this.popularity1 = 'Popular';
    } else {
      return this.popularity1 = 'Sizzling hot!';
    }
  }
}
