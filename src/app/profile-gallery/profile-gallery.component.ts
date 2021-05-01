import {Component, OnInit} from '@angular/core';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/pet';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];
  petSelected: Pet | undefined;
  searchText: any;

  constructor(private petService: PetService) {
  }

  ngOnInit(): void {
    this.searchText = this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(
      pets => this.pets = pets);
  }

  selectedPet(pet: Pet): Pet {
    return this.petSelected = pet;
  }

}
