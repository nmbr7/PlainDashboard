import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  projects_ApiKeyRestrictions,
  projects_ApiKeyRestrictions_GetTypes,
} from "../types/projects_ApiKeyRestrictions";

export interface ApiKeyArgs {
  // Key restrictions.
  restrictions?: projects_ApiKeyRestrictions;

  // Human-readable display name of this API key. Modifiable by user.
  displayName?: string;

  // The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.
  name?: string;

  // The project for the resource
  project?: string;
}
export class ApiKey extends DS_Resource {
  // Human-readable display name of this API key. Modifiable by user.
  public displayName?: string;

  // Output only. An encrypted and signed value held by this key. This field can be accessed only through the `GetKeyString` method.
  public keyString?: string;

  // The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.
  public name?: string;

  // The project for the resource
  public project?: string;

  // Key restrictions.
  public restrictions?: projects_ApiKeyRestrictions;

  // Output only. Unique id in UUID4 format.
  public uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "restrictions",
        "Key restrictions.",
        () => projects_ApiKeyRestrictions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Human-readable display name of this API key. Modifiable by user.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.",
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
    ];
  }
}
