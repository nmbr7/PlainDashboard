import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssoadmin_InstanceAccessControlAttributesAttribute,
  ssoadmin_InstanceAccessControlAttributesAttribute_GetTypes,
} from "../types/ssoadmin_InstanceAccessControlAttributesAttribute";

export interface InstanceAccessControlAttributesArgs {
  // See AccessControlAttribute for more details.
  attributes?: Array<ssoadmin_InstanceAccessControlAttributesAttribute>;

  // The Amazon Resource Name (ARN) of the SSO Instance.
  instanceArn?: string;
}
export class InstanceAccessControlAttributes extends DS_Resource {
  // See AccessControlAttribute for more details.
  public attributes?: Array<ssoadmin_InstanceAccessControlAttributesAttribute>;

  // The Amazon Resource Name (ARN) of the SSO Instance.
  public instanceArn?: string;

  //
  public status?: string;

  //
  public statusReason?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "attributes",
        "See AccessControlAttribute for more details.",
        () => ssoadmin_InstanceAccessControlAttributesAttribute_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceArn",
        "The Amazon Resource Name (ARN) of the SSO Instance.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
