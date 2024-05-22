import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector,
  accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector_GetTypes,
} from "./accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector";

export interface accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperation {
  /*
API methods or permissions to allow. Method or permission must belong
to the service specified by `serviceName` field. A single MethodSelector
entry with `-` specified for the `method` field will allow all methods
AND permissions for the service specified in `serviceName`.
Structure is documented below.
*/
  methodSelectors?: Array<accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector>;

  /*
The name of the API whose methods or permissions the `IngressPolicy` or
`EgressPolicy` want to allow. A single `ApiOperation` with serviceName
field set to `-` will allow all methods AND permissions for all services.
*/
  serviceName?: string;
}

export function accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "methodSelectors",
      "API methods or permissions to allow. Method or permission must belong\nto the service specified by `serviceName` field. A single MethodSelector\nentry with `*` specified for the `method` field will allow all methods\nAND permissions for the service specified in `serviceName`.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "The name of the API whose methods or permissions the `IngressPolicy` or\n`EgressPolicy` want to allow. A single `ApiOperation` with serviceName\nfield set to `*` will allow all methods AND permissions for all services.",
      [],
      false,
      false,
    ),
  ];
}
