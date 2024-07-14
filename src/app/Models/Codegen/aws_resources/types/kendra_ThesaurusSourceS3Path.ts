import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kendra_ThesaurusSourceS3Path {
  // The name of the S3 bucket that contains the file.
  bucket?: string;

  /*
The name of the file.

The following arguments are optional:
*/
  key?: string;
}

export function kendra_ThesaurusSourceS3Path_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The name of the S3 bucket that contains the file.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The name of the file.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
  ];
}
