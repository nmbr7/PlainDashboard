import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface redshift_ClusterSnapshotCopy {
  // The destination region that you want to copy snapshots to.
  destinationRegion?: string;

  // The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
  grantName?: string;

  // The number of days to retain automated snapshots in the destination region after they are copied from the source region. Defaults to `7`.
  retentionPeriod?: number;
}

export function redshift_ClusterSnapshotCopy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationRegion",
      "The destination region that you want to copy snapshots to.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "grantName",
      "The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retentionPeriod",
      "The number of days to retain automated snapshots in the destination region after they are copied from the source region. Defaults to `7`.",
      () => [],
      false,
      false,
    ),
  ];
}
