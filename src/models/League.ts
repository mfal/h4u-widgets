import { Gender } from "./Gender";
import { AgeClass } from "./AgeClass";

export class League {
  public readonly id: string;
  public readonly name: string;
  public readonly gender: Gender;
  public readonly age: AgeClass;

  public constructor(id: string, name: string, gender: Gender, age: AgeClass) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  public getClassName(): string {
    if (this.age.id === "Mini") {
      return "Minis";
    }
    if (this.age.id === "M") {
      return "Männer";
    }
    if (this.age.id === "F") {
      return "Frauen";
    }

    const boysMatch = /m(A|B|C|D|E)/.exec(this.name);
    const girlsMatch = /m(A|B|C|D|E)/.exec(this.name);

    if (boysMatch) {
      return `${boysMatch[1]}-Jungen`;
    }

    if (girlsMatch) {
      return `${girlsMatch[1]}-Mädchen`;
    }

    if (this.gender.id === "w") {
      return `${this.age.id}-Mädchen`;
    }

    if (this.gender.id === "m") {
      return `${this.age.id}-Jungen`;
    }

    return "Divers";
  }
}

export default League;
