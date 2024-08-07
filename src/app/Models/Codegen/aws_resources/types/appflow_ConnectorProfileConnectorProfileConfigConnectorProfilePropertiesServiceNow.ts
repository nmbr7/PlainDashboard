import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow {
  // The location of the Datadog resource.
  instanceUrl?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceUrl",
      "The location of the Datadog resource.",
      [],
      true,
      false,
    ),
  ];
}
