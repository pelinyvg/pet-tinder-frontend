import {Kind} from './kind.enum';


export interface Pet {
  id: number;
  name: string;
  kind: Kind;
  image: string;
  profileText: string;
  popularity: number;

/*  constructor(private id: number, name: string, kind: Kind, image: string, profileText: string, popularity: number) {
      this.id = id;
      this.name = name;
      this.kind = kind;
      this.image = image;
      this.profileText = profileText;
      this.popularity = popularity;
  }*/
}
