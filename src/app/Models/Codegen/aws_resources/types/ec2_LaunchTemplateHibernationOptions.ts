import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_LaunchTemplateHibernationOptions {
  // If set to `true`, the launched EC2 instance will hibernation enabled.
  configured?: boolean;
}

export function ec2_LaunchTemplateHibernationOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "configured",
      "If set to `true`, the launched EC2 instance will hibernation enabled.",
      [],
      true,
      false,
    ),
  ];
}
