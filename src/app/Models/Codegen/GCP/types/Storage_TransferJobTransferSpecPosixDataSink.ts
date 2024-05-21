import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_TransferJobTransferSpecPosixDataSink {
  // Root directory path to the filesystem.
  rootDirectory?: string;
}

export function storage_TransferJobTransferSpecPosixDataSink_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "rootDirectory",
      "Root directory path to the filesystem.",
      [],
      true,
      false,
    ),
  ];
}
