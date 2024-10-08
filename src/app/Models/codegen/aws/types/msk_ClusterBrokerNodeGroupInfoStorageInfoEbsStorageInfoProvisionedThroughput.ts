import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
  //
  enabled?: boolean;

  // Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second. The minimum value is `250`. The maximum value varies between broker type. You can refer to the valid values for the maximum volume throughput at the following [documentation on throughput bottlenecks](https://docs.aws.amazon.com/msk/latest/developerguide/msk-provision-throughput.html#throughput-bottlenecks)
  volumeThroughput?: number;
}

export function msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "volumeThroughput",
      "Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second. The minimum value is `250`. The maximum value varies between broker type. You can refer to the valid values for the maximum volume throughput at the following [documentation on throughput bottlenecks](https://docs.aws.amazon.com/msk/latest/developerguide/msk-provision-throughput.html#throughput-bottlenecks)",
      () => [],
      false,
      false,
    ),
  ];
}
