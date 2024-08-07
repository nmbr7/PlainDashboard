import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appengine_StandardAppVersionDeploymentZip {
  // files count
  filesCount?: number;

  // Source URL
  sourceUrl?: string;
}

export function appengine_StandardAppVersionDeploymentZip_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "filesCount",
      "files count",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceUrl",
      "Source URL",
      [],
      true,
      false,
    ),
  ];
}
