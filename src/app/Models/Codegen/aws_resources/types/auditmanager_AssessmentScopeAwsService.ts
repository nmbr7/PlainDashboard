import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface auditmanager_AssessmentScopeAwsService {
  // Name of the Amazon Web Service.
  serviceName?: string;
}

export function auditmanager_AssessmentScopeAwsService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "Name of the Amazon Web Service.",
      [],
      true,
      false,
    ),
  ];
}
