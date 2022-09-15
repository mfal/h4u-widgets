import { Age } from "../api/schemas/components";

export class AgeClass {
  public readonly id: Age;

  public constructor(id: Age) {
    this.id = id;
  }
}

export default AgeClass;
