import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchTemplateTagSpecification {
  //
  resourceType?: string;

  // Map of tags, each pair of which must exactly match a pair on the desired Launch Template.
  tags?: Map<string, string>;
}

export function ec2_getLaunchTemplateTagSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "resourceType", "", [], true, false),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Map of tags, each pair of which must exactly match a pair on the desired Launch Template.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
