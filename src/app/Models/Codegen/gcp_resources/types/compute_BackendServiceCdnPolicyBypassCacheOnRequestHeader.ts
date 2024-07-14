import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_BackendServiceCdnPolicyBypassCacheOnRequestHeader {
  // The header field name to match on when bypassing cache. Values are case-insensitive.
  headerName?: string;
}

export function compute_BackendServiceCdnPolicyBypassCacheOnRequestHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "The header field name to match on when bypassing cache. Values are case-insensitive.",
      [],
      true,
      false,
    ),
  ];
}
