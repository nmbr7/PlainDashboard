import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sesv2_ConfigurationSetTrackingOptions {
  // The domain to use for tracking open and click events.
  customRedirectDomain?: string;
}

export function sesv2_ConfigurationSetTrackingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "customRedirectDomain",
      "The domain to use for tracking open and click events.",
      [],
      true,
      false,
    ),
  ];
}
