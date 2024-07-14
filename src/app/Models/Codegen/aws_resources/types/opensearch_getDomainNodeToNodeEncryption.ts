import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opensearch_getDomainNodeToNodeEncryption {
  // Enabled disabled toggle for off-peak update window
  enabled?: boolean;
}

export function opensearch_getDomainNodeToNodeEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled disabled toggle for off-peak update window",
      [],
      true,
      false,
    ),
  ];
}
