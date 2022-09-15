import { ComponentType, ReactElement } from "react";
import invariant from "invariant";
import { z } from "zod";

interface WidgetRegistryEntry {
  component: ComponentType<any>;
  loadingView?: ReactElement;
  propsSchema: z.ZodTypeAny;
}

export class WidgetRegistry {
  private readonly registry = new Map<string, WidgetRegistryEntry>();
  private readonly context: __WebpackModuleApi.RequireContext;

  public constructor(context: __WebpackModuleApi.RequireContext) {
    this.context = context;
  }

  public load = (): void => {
    this.context.keys().forEach((c) => this.context(c));
  };

  public register<TSchema extends z.ZodTypeAny>(
    type: string,
    component: ComponentType<z.infer<TSchema>>,
    loadingView: ReactElement,
    propsSchema: TSchema
  ): void {
    invariant(
      !this.registry.has(type),
      `Widget type ${type} already registered`
    );

    this.registry.set(type, {
      component,
      loadingView,
      propsSchema
    });
  }

  public get(type: string): WidgetRegistryEntry {
    const entry = this.registry.get(type);
    invariant(entry !== undefined, `Widget ${type} is not supported`);
    return entry;
  }
}

export default WidgetRegistry;
