import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EnvKeystoreArgs {
  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  envId?: string;

  // The name of the newly created keystore.
  name?: string;
}
export class EnvKeystore extends DS_Resource {
  // The name of the newly created keystore.
  public name?: string;

  // Aliases in this keystore.
  public aliases?: Array<string>;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  public envId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "envId",
        "The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/environments/{{env_name}}`.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the newly created keystore.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
