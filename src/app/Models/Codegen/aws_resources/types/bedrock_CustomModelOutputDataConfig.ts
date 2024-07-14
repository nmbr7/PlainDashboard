import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bedrock_CustomModelOutputDataConfig {
  // The S3 URI where the validation data is stored.
  s3Uri?: string;
}

export function bedrock_CustomModelOutputDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "The S3 URI where the validation data is stored.",
      [],
      true,
      false,
    ),
  ];
}
