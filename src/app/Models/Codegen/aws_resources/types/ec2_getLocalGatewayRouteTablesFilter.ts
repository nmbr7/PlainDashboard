import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLocalGatewayRouteTablesFilter {
  /*
Set of values that are accepted for the given field.
A Local Gateway Route Table will be selected if any one of the given values matches.
*/
  values?: Array<string>;

  /*
Name of the field to filter by, as defined by
[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTables.html).
*/
  name?: string;
}

export function ec2_getLocalGatewayRouteTablesFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given field.\nA Local Gateway Route Table will be selected if any one of the given values matches.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the field to filter by, as defined by\n[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTables.html).",
      [],
      true,
      false,
    ),
  ];
}
