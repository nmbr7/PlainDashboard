import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssmcontacts_getPlanStageTargetChannelTargetInfo {
  //
  contactChannelId?: string;

  //
  retryIntervalInMinutes?: number;
}

export function ssmcontacts_getPlanStageTargetChannelTargetInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contactChannelId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryIntervalInMinutes",
      "",
      [],
      true,
      false,
    ),
  ];
}
