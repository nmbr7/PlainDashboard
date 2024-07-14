import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getNetworkInsightsAnalysisExplanationPortRange {
  //
  to?: number;

  //
  from?: number;
}

export function ec2_getNetworkInsightsAnalysisExplanationPortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "from", "", [], true, false),
    new DynamicUIProps(InputType.Number, "to", "", [], true, false),
  ];
}