import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsCondition,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsCondition_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsCondition";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions {
  /*
A collection of conditions.
Structure is documented below.
*/
  conditions?: Array<dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsCondition>;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "A collection of conditions.\nStructure is documented below.",
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
