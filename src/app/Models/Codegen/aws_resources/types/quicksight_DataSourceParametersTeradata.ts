import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSourceParametersTeradata {
  // The warehouse to which to connect.
  port?: number;

  // The database to which to connect.
  database?: string;

  // The host to which to connect.
  host?: string;
}

export function quicksight_DataSourceParametersTeradata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "database",
      "The database to which to connect.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      "The host to which to connect.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The warehouse to which to connect.",
      [],
      true,
      false,
    ),
  ];
}
