import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getLaunchConfigurationRootBlockDevice {
  // Whether the EBS Volume will be deleted on instance termination.
  deleteOnTermination?: boolean;

  // Whether the volume is Encrypted.
  encrypted?: boolean;

  // Provisioned IOPs of the volume.
  iops?: number;

  // Throughput of the volume.
  throughput?: number;

  // Size of the volume.
  volumeSize?: number;

  // Type of the volume.
  volumeType?: string;
}

export function ec2_getLaunchConfigurationRootBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Type of the volume.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "Whether the EBS Volume will be deleted on instance termination.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encrypted",
      "Whether the volume is Encrypted.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Provisioned IOPs of the volume.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "Throughput of the volume.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "Size of the volume.",
      [],
      true,
      false,
    ),
  ];
}
