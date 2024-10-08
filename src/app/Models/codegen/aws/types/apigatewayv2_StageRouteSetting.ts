import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apigatewayv2_StageRouteSetting {
  // Whether detailed metrics are enabled for the route. Defaults to `false`.
  detailedMetricsEnabled?: boolean;

  /*
Logging level for the route. Affects the log entries pushed to Amazon CloudWatch Logs.
Valid values: `ERROR`, `INFO`, `OFF`. Defaults to `OFF`. Supported only for WebSocket APIs. This provider will only perform drift detection of its value when present in a configuration.
*/
  loggingLevel?: string;

  // Route key.
  routeKey?: string;

  // Throttling burst limit for the route.
  throttlingBurstLimit?: number;

  // Throttling rate limit for the route.
  throttlingRateLimit?: number;

  /*
Whether data trace logging is enabled for the route. Affects the log entries pushed to Amazon CloudWatch Logs.
Defaults to `false`. Supported only for WebSocket APIs.
*/
  dataTraceEnabled?: boolean;
}

export function apigatewayv2_StageRouteSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "detailedMetricsEnabled",
      "Whether detailed metrics are enabled for the route. Defaults to `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "loggingLevel",
      "Logging level for the route. Affects the log entries pushed to Amazon CloudWatch Logs.\nValid values: `ERROR`, `INFO`, `OFF`. Defaults to `OFF`. Supported only for WebSocket APIs. This provider will only perform drift detection of its value when present in a configuration.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routeKey",
      "Route key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throttlingBurstLimit",
      "Throttling burst limit for the route.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throttlingRateLimit",
      "Throttling rate limit for the route.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dataTraceEnabled",
      "Whether data trace logging is enabled for the route. Affects the log entries pushed to Amazon CloudWatch Logs.\nDefaults to `false`. Supported only for WebSocket APIs.",
      () => [],
      false,
      false,
    ),
  ];
}
