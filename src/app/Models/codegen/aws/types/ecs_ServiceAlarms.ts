import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_ServiceAlarms {
  // One or more CloudWatch alarm names.
  alarmNames?: Array<string>;

  // Whether to use the CloudWatch alarm option in the service deployment process.
  enable?: boolean;

  // Whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
  rollback?: boolean;
}

export function ecs_ServiceAlarms_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "alarmNames",
      "One or more CloudWatch alarm names.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "Whether to use the CloudWatch alarm option in the service deployment process.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "rollback",
      "Whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.",
      () => [],
      true,
      false,
    ),
  ];
}
