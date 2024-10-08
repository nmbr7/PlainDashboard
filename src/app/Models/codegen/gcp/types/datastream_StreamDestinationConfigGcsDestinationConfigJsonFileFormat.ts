import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat {
  /*
Compression of the loaded JSON file.
Possible values are: `NO_COMPRESSION`, `GZIP`.
*/
  compression?: string;

  /*
The schema file format along JSON data files.
Possible values are: `NO_SCHEMA_FILE`, `AVRO_SCHEMA_FILE`.
*/
  schemaFileFormat?: string;
}

export function datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "compression",
      "Compression of the loaded JSON file.\nPossible values are: `NO_COMPRESSION`, `GZIP`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schemaFileFormat",
      "The schema file format along JSON data files.\nPossible values are: `NO_SCHEMA_FILE`, `AVRO_SCHEMA_FILE`.",
      () => [],
      false,
      false,
    ),
  ];
}
