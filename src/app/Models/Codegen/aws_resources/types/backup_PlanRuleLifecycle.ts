import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface backup_PlanRuleLifecycle {
  // This setting will instruct your backup plan to transition supported resources to archive (cold) storage tier in accordance with your lifecycle settings.
  optInToArchiveForSupportedResources?: boolean;

  // Specifies the number of days after creation that a recovery point is moved to cold storage.
  coldStorageAfter?: number;

  // Specifies the number of days after creation that a recovery point is deleted. Must be 90 days greater than `cold_storage_after`.
  deleteAfter?: number;
}

export function backup_PlanRuleLifecycle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "optInToArchiveForSupportedResources",
      "This setting will instruct your backup plan to transition supported resources to archive (cold) storage tier in accordance with your lifecycle settings.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "coldStorageAfter",
      "Specifies the number of days after creation that a recovery point is moved to cold storage.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "deleteAfter",
      "Specifies the number of days after creation that a recovery point is deleted. Must be 90 days greater than `cold_storage_after`.",
      [],
      false,
      false,
    ),
  ];
}
