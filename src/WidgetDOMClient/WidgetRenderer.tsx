import React, { createElement, FC, Suspense } from "react";
import WidgetContainer from "./WidgetContainer";
import widgetRegistry from "../WidgetRegistry";

interface Props {
  container: WidgetContainer;
}

export const WidgetRenderer: FC<Props> = (props) => {
  const { container } = props;
  const widget = widgetRegistry.get(container.type);
  const validatedProps = widget.propsSchema.parse(container.props);
  return (
    <Suspense fallback={widget.loadingView}>
      {createElement(widget.component, validatedProps)}
    </Suspense>
  );
};

export default WidgetRenderer;
