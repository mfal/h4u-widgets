import WidgetContainer from "./WidgetContainer";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import ErrorView from "../components/ErrorView";
import WidgetRenderer from "./WidgetRenderer";

export class WidgetDOMClient {
  private readonly renderAttempts = new Set<Element>();

  private getWidgetContainers(): WidgetContainer[] {
    const domElements = document.querySelectorAll(
      WidgetContainer.domQuerySelectorExpression
    );
    return Array.from(domElements).map((el) => new WidgetContainer(el));
  }

  public renderWidgets(): void {
    this.getWidgetContainers().forEach((container) =>
      this.renderWidget(container)
    );
  }

  private alreadyRendered(container: WidgetContainer): boolean {
    if (this.renderAttempts.has(container.domElement)) {
      return true;
    }

    this.renderAttempts.add(container.domElement);
    return false;
  }

  private renderWidget(container: WidgetContainer): void {
    if (this.alreadyRendered(container)) {
      return;
    }

    try {
      const root = createRoot(container.domElement);

      root.render(
        <ErrorBoundary fallbackRender={ErrorView}>
          <WidgetRenderer container={container} />
        </ErrorBoundary>
      );
    } catch (error) {
      console.error(error);
    }
  }
}

export default WidgetDOMClient;
