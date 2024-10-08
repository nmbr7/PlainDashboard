import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getHealthCheckTcpHealthCheck {
  /*
The application data to send once the TCP connection has been
established (default value is empty). If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.
*/
  request?: string;

  /*
The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
*/
  response?: string;

  /*
The TCP port number for the TCP health check request.
The default value is 443.
*/
  port?: number;

  /*
Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
*/
  portName?: string;

  /*
Specifies how port is selected for health checking, can be one of the
following values:

  - 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  - 'USE_NAMED_PORT': The 'portName' is used for health checking.

  - 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
*/
  portSpecification?: string;

  /*
Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
*/
  proxyHeader?: string;
}

export function compute_getHealthCheckTcpHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "request",
      "The application data to send once the TCP connection has been\nestablished (default value is empty). If both request and response are\nempty, the connection establishment alone will indicate health. The request\ndata can only be ASCII.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "response",
      "The bytes to match against the beginning of the response data. If left empty\n(the default value), any response will indicate health. The response data\ncan only be ASCII.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The TCP port number for the TCP health check request.\nThe default value is 443.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "portName",
      "Port name as defined in InstanceGroup#NamedPort#name. If both port and\nport_name are defined, port takes precedence.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "portSpecification",
      "Specifies how port is selected for health checking, can be one of the\nfollowing values:\n\n  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.\n\n  * 'USE_NAMED_PORT': The 'portName' is used for health checking.\n\n  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each\n  network endpoint is used for health checking. For other backends, the\n  port or named port specified in the Backend Service is used for health\n  checking.\n\nIf not specified, TCP health check follows behavior specified in 'port' and\n'portName' fields. Possible values: [\"USE_FIXED_PORT\", \"USE_NAMED_PORT\", \"USE_SERVING_PORT\"]",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "proxyHeader",
      'Specifies the type of proxy header to append before sending data to the\nbackend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]',
      () => [],
      true,
      false,
    ),
  ];
}
