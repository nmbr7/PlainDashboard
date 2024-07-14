import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getNetworkInterfaceAttachment {
  //
  attachmentId?: string;

  //
  deviceIndex?: number;

  //
  instanceId?: string;

  //
  instanceOwnerId?: string;
}

export function ec2_getNetworkInterfaceAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "attachmentId", "", [], true, false),
    new DynamicUIProps(InputType.Number, "deviceIndex", "", [], true, false),
    new DynamicUIProps(InputType.String, "instanceId", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "instanceOwnerId",
      "",
      [],
      true,
      false,
    ),
  ];
}
