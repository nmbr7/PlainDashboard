import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_StandardAppVersionDeploymentZip {
  // Source URL
  sourceUrl?: string;

  // files count
  filesCount?: number;
}

export function appengine_StandardAppVersionDeploymentZip_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourceUrl",
      "Source URL",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "filesCount",
      "files count",
      [],
      false,
      false,
    ),
  ];
}
