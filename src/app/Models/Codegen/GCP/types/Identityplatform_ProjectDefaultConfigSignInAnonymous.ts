import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface identityplatform_ProjectDefaultConfigSignInAnonymous {
  /*
Whether anonymous user auth is enabled for the project or not.

<a name="nested_hash_config"></a>The `hash_config` block contains:
*/
  enabled?: boolean;
}

export function identityplatform_ProjectDefaultConfigSignInAnonymous_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      'Whether anonymous user auth is enabled for the project or not.\n\n<a name="nested_hash_config"></a>The `hash_config` block contains:',
      [],
      true,
      false,
    ),
  ];
}
