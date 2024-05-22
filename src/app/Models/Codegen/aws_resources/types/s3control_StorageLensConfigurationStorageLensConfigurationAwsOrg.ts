import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg {
  // The Amazon Resource Name (ARN) of the Amazon Web Services organization.
  arn?: string;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the Amazon Web Services organization.",
      [],
      true,
      false,
    ),
  ];
}
