import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  verifiedpermissions_PolicyStoreValidationSettings,
  verifiedpermissions_PolicyStoreValidationSettings_GetTypes,
} from "../types/verifiedpermissions_PolicyStoreValidationSettings";

export interface PolicyStoreArgs {
  // Validation settings for the policy store.
  validationSettings?: verifiedpermissions_PolicyStoreValidationSettings;

  // A description of the Policy Store.
  description?: string;
}
export class PolicyStore extends DS_Resource {
  // The ARN of the Policy Store.
  public arn?: string;

  // A description of the Policy Store.
  public description?: string;

  // The ID of the Policy Store.
  public policyStoreId?: string;

  // Validation settings for the policy store.
  public validationSettings?: verifiedpermissions_PolicyStoreValidationSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "validationSettings",
        "Validation settings for the policy store.",
        () => verifiedpermissions_PolicyStoreValidationSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the Policy Store.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
