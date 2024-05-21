import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface firebase_HostingCustomDomainIssue {
  // Error message
  message?: string;

  // The status code, which should be an enum value of `google.rpc.Code`
  code?: number;

  // A list of messages that carry the error details.
  details?: string;
}

export function firebase_HostingCustomDomainIssue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "message",
      "Error message",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "code",
      "The status code, which should be an enum value of `google.rpc.Code`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "details",
      "A list of messages that carry the error details.",
      [],
      false,
      false,
    ),
  ];
}
