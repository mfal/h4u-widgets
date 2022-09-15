export class Address {
  public readonly town: string;
  public readonly street: string;
  public readonly postal: string;

  public constructor(town: string, street: string, postal: string) {
    this.town = town;
    this.street = street;
    this.postal = postal;
  }
}

export default Address;
