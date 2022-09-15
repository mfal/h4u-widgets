import { Gender as GenderType } from "../api/schemas/components";

export class Gender {
  public readonly id: GenderType;

  public constructor(id: GenderType) {
    this.id = id;
  }
}

export default Gender;
