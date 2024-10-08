import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod {
  // The type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. Setting this value to `NONE` disables autocommit. Valid values: `MINUTES`, `HOURS`, `DAYS`, `MONTHS`, `YEARS`, `NONE`.
  type?: string;

  // The amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.
  value?: number;
}

export function fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. Setting this value to `NONE` disables autocommit. Valid values: `MINUTES`, `HOURS`, `DAYS`, `MONTHS`, `YEARS`, `NONE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "The amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.",
      () => [],
      false,
      false,
    ),
  ];
}
