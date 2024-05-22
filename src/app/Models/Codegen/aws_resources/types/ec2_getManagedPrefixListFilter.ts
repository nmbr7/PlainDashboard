import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getManagedPrefixListFilter {
  // Name of the filter field. Valid values can be found in the EC2 [DescribeManagedPrefixLists](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeManagedPrefixLists.html) API Reference.
  name?: string;

  // Set of values that are accepted for the given filter field. Results will be selected if any given value matches.
  values?: Array<string>;
}

export function ec2_getManagedPrefixListFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the filter field. Valid values can be found in the EC2 [DescribeManagedPrefixLists](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeManagedPrefixLists.html) API Reference.",
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
