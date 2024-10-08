import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput,
  msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput_GetTypes,
} from "./msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput";

export interface msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
  // A block that contains EBS volume provisioned throughput information. To provision storage throughput, you must choose broker type kafka.m5.4xlarge or larger. See below.
  provisionedThroughput?: msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;

  // The size in GiB of the EBS volume for the data drive on each broker node. Minimum value of `1` and maximum value of `16384`.
  volumeSize?: number;
}

export function msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "provisionedThroughput",
      "A block that contains EBS volume provisioned throughput information. To provision storage throughput, you must choose broker type kafka.m5.4xlarge or larger. See below.",
      () =>
        msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "The size in GiB of the EBS volume for the data drive on each broker node. Minimum value of `1` and maximum value of `16384`.",
      () => [],
      false,
      false,
    ),
  ];
}
