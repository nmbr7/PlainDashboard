import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DashboardSourceEntitySourceTemplateDataSetReference {
  // Dataset Amazon Resource Name (ARN).
  dataSetArn?: string;

  // Dataset placeholder.
  dataSetPlaceholder?: string;
}

export function quicksight_DashboardSourceEntitySourceTemplateDataSetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataSetArn",
      "Dataset Amazon Resource Name (ARN).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataSetPlaceholder",
      "Dataset placeholder.",
      [],
      true,
      false,
    ),
  ];
}
