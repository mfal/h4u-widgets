import widgetRegistry from "./WidgetRegistry";
import widgetDOMClient from "./WidgetDOMClient";
import { Settings } from "luxon";

Settings.defaultLocale = "de";

widgetRegistry.load();
widgetDOMClient.renderWidgets();
