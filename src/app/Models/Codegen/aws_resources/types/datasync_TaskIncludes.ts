import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datasync_TaskIncludes {
  // The type of filter rule to apply. Valid values: `SIMPLE_PATTERN`.
  filterType?: string;

  // A single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe), for example: `/folder1|/folder2`
  value?: string;
}

export function datasync_TaskIncludes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      'A single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe), for example: `/folder1|/folder2`',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterType",
      "The type of filter rule to apply. Valid values: `SIMPLE_PATTERN`.",
      [],
      false,
      false,
    ),
  ];
}
