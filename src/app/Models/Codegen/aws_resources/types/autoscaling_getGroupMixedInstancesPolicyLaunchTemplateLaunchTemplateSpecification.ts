import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  // ID of the launch template.
  launchTemplateId?: string;

  // Name of the launch template.
  launchTemplateName?: string;

  // Template version.
  version?: string;
}

export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "launchTemplateId",
      "ID of the launch template.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateName",
      "Name of the launch template.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Template version.",
      [],
      true,
      false,
    ),
  ];
}
