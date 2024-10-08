import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface GoogleChannelConfigArgs {
  // The location for the resource
  location?: string;

  /*
Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.



- - -
*/
  name?: string;

  // The project for the resource
  project?: string;

  // Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/-/locations/-/keyRings/-/cryptoKeys/-`.
  cryptoKeyName?: string;
}
export class GoogleChannelConfig extends DS_Resource {
  // The location for the resource
  public location?: string;

  /*
Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.



- - -
*/
  public name?: string;

  // The project for the resource
  public project?: string;

  // Output only. The last-modified time.
  public updateTime?: string;

  // Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/-/locations/-/keyRings/-/cryptoKeys/-`.
  public cryptoKeyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.\n\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cryptoKeyName",
        "Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/*/locations/*/keyRings/*/cryptoKeys/*`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        () => [],
        true,
        true,
      ),
    ];
  }
}
