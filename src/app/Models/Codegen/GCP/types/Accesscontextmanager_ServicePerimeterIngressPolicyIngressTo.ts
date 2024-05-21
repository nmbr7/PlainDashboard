import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperation,
  accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperation_GetTypes,
} from "./accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperation";

export interface accesscontextmanager_ServicePerimeterIngressPolicyIngressTo {
  /*
A list of `ApiOperations` the sources specified in corresponding `IngressFrom`
are allowed to perform in this `ServicePerimeter`.
Structure is documented below.
*/
  operations?: Array<accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperation>;

  /*
A list of resources, currently only projects in the form
`projects/<projectnumber>`, protected by this `ServicePerimeter`
that are allowed to be accessed by sources defined in the
corresponding `IngressFrom`. A request matches if it contains
a resource in this list. If `-` is specified for resources,
then this `IngressTo` rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the `operations` field.
*/
  resources?: Array<string>;
}

export function accesscontextmanager_ServicePerimeterIngressPolicyIngressTo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "resources",
      "A list of resources, currently only projects in the form\n`projects/<projectnumber>`, protected by this `ServicePerimeter`\nthat are allowed to be accessed by sources defined in the\ncorresponding `IngressFrom`. A request matches if it contains\na resource in this list. If `*` is specified for resources,\nthen this `IngressTo` rule will authorize access to all\nresources inside the perimeter, provided that the request\nalso matches the `operations` field.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "operations",
      "A list of `ApiOperations` the sources specified in corresponding `IngressFrom`\nare allowed to perform in this `ServicePerimeter`.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperation_GetTypes(),
      false,
      false,
    ),
  ];
}
