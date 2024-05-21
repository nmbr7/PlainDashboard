import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_getJobTemplateTemplateVpcAccessNetworkInterface,
  cloudrunv2_getJobTemplateTemplateVpcAccessNetworkInterface_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateVpcAccessNetworkInterface";

export interface cloudrunv2_getJobTemplateTemplateVpcAccess {
  // VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  connector?: string;

  // Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]
  egress?: string;

  // Direct VPC egress settings. Currently only single network interface is supported.
  networkInterfaces?: Array<cloudrunv2_getJobTemplateTemplateVpcAccessNetworkInterface>;
}

export function cloudrunv2_getJobTemplateTemplateVpcAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connector",
      "VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "egress",
      'Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaces",
      "Direct VPC egress settings. Currently only single network interface is supported.",
      cloudrunv2_getJobTemplateTemplateVpcAccessNetworkInterface_GetTypes(),
      true,
      false,
    ),
  ];
}
