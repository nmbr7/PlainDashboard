import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AppCheckPlayIntegrityConfigArgs {
  /*
The ID of an
[Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).


- - -
*/
  appId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  tokenTtl?: string;
}
export class AppCheckPlayIntegrityConfig extends DS_Resource {
  /*
Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public tokenTtl?: string;

  /*
The ID of an
[Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).


- - -
*/
  public appId?: string;

  // The relative resource name of the Play Integrity configuration object
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "appId",
        "The ID of an\n[Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tokenTtl",
        "Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid.\nIf unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
        () => [],
        false,
        false,
      ),
    ];
  }
}
