import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkservices_GrpcRouteRuleMatchMethod {
  // Required. Name of the service to match against.
  grpcService?: string;

  // Specifies that matches are case sensitive. The default value is true.
  caseSensitive?: boolean;

  // Required. Name of the method to match against.
  grpcMethod?: string;
}

export function networkservices_GrpcRouteRuleMatchMethod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "grpcService",
      "Required. Name of the service to match against.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "caseSensitive",
      "Specifies that matches are case sensitive. The default value is true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "grpcMethod",
      "Required. Name of the method to match against.",
      [],
      true,
      false,
    ),
  ];
}
