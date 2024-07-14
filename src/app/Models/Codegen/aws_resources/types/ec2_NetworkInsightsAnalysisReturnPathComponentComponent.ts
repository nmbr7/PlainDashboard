import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_NetworkInsightsAnalysisReturnPathComponentComponent {
  // ID of the Network Insights Analysis.
  id?: string;

  //
  name?: string;

  // ARN of the Network Insights Analysis.
  arn?: string;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the Network Insights Analysis.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "name", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the Network Insights Analysis.",
      [],
      false,
      false,
    ),
  ];
}
