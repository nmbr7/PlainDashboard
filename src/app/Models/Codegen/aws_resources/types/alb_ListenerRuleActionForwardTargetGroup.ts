import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alb_ListenerRuleActionForwardTargetGroup {
  // The Amazon Resource Name (ARN) of the target group.
  arn?: string;

  // The weight. The range is 0 to 999.
  weight?: number;
}

export function alb_ListenerRuleActionForwardTargetGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the target group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "The weight. The range is 0 to 999.",
      [],
      false,
      false,
    ),
  ];
}
