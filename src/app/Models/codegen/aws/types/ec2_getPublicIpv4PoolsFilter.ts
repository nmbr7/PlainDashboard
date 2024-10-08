import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getPublicIpv4PoolsFilter {
  // Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html).
  name?: string;

  // Set of values that are accepted for the given field. Pool IDs will be selected if any one of the given values match.
  values?: Array<string>;
}

export function ec2_getPublicIpv4PoolsFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given field. Pool IDs will be selected if any one of the given values match.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
