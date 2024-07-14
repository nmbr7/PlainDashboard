import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties {
  // A set of key-value pairs.
  labels?: Map<string, string>;

  /*
Cloud Storage bucket location to store the auto snapshot
(regional or multi-regional)
*/
  storageLocations?: string;

  /*
Creates the new snapshot in the snapshot chain labeled with the
specified name. The chain name must be 1-63 characters long and comply
with RFC1035.
*/
  chainName?: string;

  // Whether to perform a 'guest aware' snapshot.
  guestFlush?: boolean;
}

export function compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "A set of key-value pairs.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "storageLocations",
      "Cloud Storage bucket location to store the auto snapshot\n(regional or multi-regional)",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "chainName",
      "Creates the new snapshot in the snapshot chain labeled with the\nspecified name. The chain name must be 1-63 characters long and comply\nwith RFC1035.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "guestFlush",
      "Whether to perform a 'guest aware' snapshot.",
      [],
      false,
      true,
    ),
  ];
}
