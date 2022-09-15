import { WidgetRegistry } from "./WidgetRegistry";

const context = require.context("../widgets", true, /\.tsx$/);

const widgetRegistry = new WidgetRegistry(context);

export default widgetRegistry;
