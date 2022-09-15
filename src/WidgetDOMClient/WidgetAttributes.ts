import WidgetAttribute from "./WidgetAttribute";
import invariant from "invariant";

export class WidgetAttributes {
  public readonly entries: WidgetAttribute[];

  public constructor(domElement: Element) {
    this.entries = this.initEntries(domElement);
  }

  private initEntries(domElement: Element): WidgetAttribute[] {
    return domElement
      .getAttributeNames()
      .filter((attr) => WidgetAttribute.isValid(domElement, attr))
      .map((attr) => new WidgetAttribute(domElement, attr));
  }

  public has(name: string): boolean {
    return this.entries.some((attr) => attr.localName === name);
  }

  public get(name: string): string | undefined {
    return this.entries.find((attr) => attr.localName === name)?.value;
  }

  public mustGet(name: string): string {
    const value = this.get(name);
    invariant(value !== undefined, `WidgetAttribute ${name} does not exist`);
    return value;
  }
}

export default WidgetAttributes;
