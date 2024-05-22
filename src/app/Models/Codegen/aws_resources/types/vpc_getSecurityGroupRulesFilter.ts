import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vpc_getSecurityGroupRulesFilter {
  /*
Name of the field to filter by, as defined by
[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupRules.html).
*/
  name?: string;

  /*
Set of values that are accepted for the given field.
Security group rule IDs will be selected if any one of the given values match.
*/
  values?: Array<string>;
}

export function vpc_getSecurityGroupRulesFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the field to filter by, as defined by\n[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupRules.html).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given field.\nSecurity group rule IDs will be selected if any one of the given values match.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
