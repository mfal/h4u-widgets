import Address from "./Address";

export class Arena {
  public readonly name: string;
  public readonly address: Address;

  public constructor(name: string, address: Address) {
    this.name = name;
    this.address = address;
  }
}

export default Arena;
