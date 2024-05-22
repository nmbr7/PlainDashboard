import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2transitgateway_getPeeringAttachmentFilter {
  /*
Name of the field to filter by, as defined by
[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayPeeringAttachments.html).
*/
  name?: string;

  /*
Set of values that are accepted for the given field.
An EC2 Transit Gateway Peering Attachment be selected if any one of the given values matches.
*/
  values?: Array<string>;
}

export function ec2transitgateway_getPeeringAttachmentFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the field to filter by, as defined by\n[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayPeeringAttachments.html).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given field.\nAn EC2 Transit Gateway Peering Attachment be selected if any one of the given values matches.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
