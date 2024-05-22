import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_LaunchTemplateTagSpecification {
  // The type of resource to tag.
  resourceType?: string;

  // A map of tags to assign to the resource.
  tags?: Map<string, string>;
}

export function ec2_LaunchTemplateTagSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "The type of resource to tag.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "A map of tags to assign to the resource.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
