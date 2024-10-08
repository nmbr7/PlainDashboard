import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface WorkingStorageArgs {
  // Local disk identifier. For example, `pci-0000:03:00.0-scsi-0:0:0:0`.
  diskId?: string;

  // The Amazon Resource Name (ARN) of the gateway.
  gatewayArn?: string;
}
export class WorkingStorage extends DS_Resource {
  // Local disk identifier. For example, `pci-0000:03:00.0-scsi-0:0:0:0`.
  public diskId?: string;

  // The Amazon Resource Name (ARN) of the gateway.
  public gatewayArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "diskId",
        "Local disk identifier. For example, `pci-0000:03:00.0-scsi-0:0:0:0`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "gatewayArn",
        "The Amazon Resource Name (ARN) of the gateway.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
