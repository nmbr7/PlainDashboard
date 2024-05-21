import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_TransferJobTransferSpecPosixDataSource {
  /*
Root directory path to the filesystem.

<a name="nested_aws_s3_data_source"></a>The `aws_s3_data_source` block supports:
*/
  rootDirectory?: string;
}

export function storage_TransferJobTransferSpecPosixDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "rootDirectory",
      'Root directory path to the filesystem.\n\n<a name="nested_aws_s3_data_source"></a>The `aws_s3_data_source` block supports:',
      [],
      true,
      false,
    ),
  ];
}
