import invariant from "invariant";

export class WidgetAttribute {
  public readonly value: string;
  public readonly localName: string;
  public static readonly prefix = "h4u-";

  public constructor(domElement: Element, name: string) {
    const value = domElement.getAttribute(name);

    invariant(
      WidgetAttribute.isValid(domElement, name) &&
        WidgetAttribute.isValidAttributeValue(value),
      `Invalid widget attribute: ${name}`
    );

    this.localName = WidgetAttribute.getLocalName(name);
    this.value = value;
  }

  public static isValid(domElement: Element, name: string): boolean {
    return (
      WidgetAttribute.isPrefixedAttributeName(name) &&
      WidgetAttribute.isValidAttributeValue(domElement.getAttribute(name))
    );
  }

  public static getLocalName(name: string): string {
    if (!WidgetAttribute.isPrefixedAttributeName(name)) {
      return name;
    }
    return name.slice(WidgetAttribute.prefix.length);
  }

  public static getPrefixedName(name: string): string {
    if (WidgetAttribute.isPrefixedAttributeName(name)) {
      return name;
    }
    return WidgetAttribute.prefix + name;
  }

  private static isValidAttributeValue(value: string | null): value is string {
    return value !== null && value.trim().length > 0;
  }

  private static isPrefixedAttributeName(name: string): boolean {
    return name.startsWith(WidgetAttribute.prefix);
  }
}

export default WidgetAttribute;
