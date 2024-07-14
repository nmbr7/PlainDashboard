import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getPrefixListFilter {
  // Name of the filter field. Valid values can be found in the [EC2 DescribePrefixLists API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrefixLists.html).
  name?: string;

  // Set of values that are accepted for the given filter field. Results will be selected if any given value matches.
  values?: Array<string>;
}

export function ec2_getPrefixListFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the filter field. Valid values can be found in the [EC2 DescribePrefixLists API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrefixLists.html).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given filter field. Results will be selected if any given value matches.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
