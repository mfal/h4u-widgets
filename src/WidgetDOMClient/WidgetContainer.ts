import { WidgetAttributes } from "./WidgetAttributes";
import invariant from "invariant";
import camelcase from "camelcase";
import WidgetAttribute from "./WidgetAttribute";

export type WidgetProps = Record<string, string | null>;

export class WidgetContainer {
  public readonly domElement: Element;
  public readonly type: string;
  public readonly props: WidgetProps;
  private static readonly typeAttributeName = "widget-type";

  public constructor(domElement: Element) {
    invariant(
      WidgetContainer.isValid(domElement),
      "DOM element is no valid H4U widget"
    );
    const attributes = new WidgetAttributes(domElement);

    this.domElement = domElement;
    this.type = attributes.mustGet(WidgetContainer.typeAttributeName);
    this.props = WidgetContainer.convertAttributes(attributes);
  }

  private static convertAttributes(attributes: WidgetAttributes): WidgetProps {
    return Object.fromEntries(
      attributes.entries
        .filter((attr) => attr.localName !== WidgetContainer.typeAttributeName)
        .map((attr) => [camelcase(attr.localName), attr.value])
    );
  }

  public static isValid(domElement: Element): boolean {
    return new WidgetAttributes(domElement).has(
      WidgetContainer.typeAttributeName
    );
  }

  public static get domQuerySelectorExpression(): string {
    const typeAttributeNamePrefixed = WidgetAttribute.getPrefixedName(
      WidgetContainer.typeAttributeName
    );
    return `[${typeAttributeNamePrefixed}]`;
  }
}

export default WidgetContainer;
