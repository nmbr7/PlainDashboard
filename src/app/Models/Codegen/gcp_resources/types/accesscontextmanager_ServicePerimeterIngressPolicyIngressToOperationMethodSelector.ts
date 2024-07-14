import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperationMethodSelector {
  /*
Value for permission should be a valid Cloud IAM permission for the
corresponding `serviceName` in `ApiOperation`.
*/
  permission?: string;

  /*
Value for method should be a valid method name for the corresponding
serviceName in `ApiOperation`. If `-` used as value for `method`, then
ALL methods and permissions are allowed.
*/
  method?: string;
}

export function accesscontextmanager_ServicePerimeterIngressPolicyIngressToOperationMethodSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "permission",
      "Value for permission should be a valid Cloud IAM permission for the\ncorresponding `serviceName` in `ApiOperation`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "method",
      "Value for method should be a valid method name for the corresponding\nserviceName in `ApiOperation`. If `*` used as value for `method`, then\nALL methods and permissions are allowed.",
      [],
      false,
      false,
    ),
  ];
}
