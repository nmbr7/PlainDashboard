import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SigningProfilePermissionArgs {
  // An AWS Signer action permitted as part of cross-account permissions. Valid values: `signer:StartSigningJob`, `signer:GetSigningProfile`, `signer:RevokeSignature`, or `signer:SignPayload`.
  action?: string;

  // The AWS principal to be granted a cross-account permission.
  principal?: string;

  // Name of the signing profile to add the cross-account permissions.
  profileName?: string;

  // The signing profile version that a permission applies to.
  profileVersion?: string;

  // A unique statement identifier. By default generated by the provider.
  statementId?: string;

  // A statement identifier prefix. The provider will generate a unique suffix. Conflicts with `statement_id`.
  statementIdPrefix?: string;
}
export class SigningProfilePermission extends Resource {
  // An AWS Signer action permitted as part of cross-account permissions. Valid values: `signer:StartSigningJob`, `signer:GetSigningProfile`, `signer:RevokeSignature`, or `signer:SignPayload`.
  public action?: string;

  // The AWS principal to be granted a cross-account permission.
  public principal?: string;

  // Name of the signing profile to add the cross-account permissions.
  public profileName?: string;

  // The signing profile version that a permission applies to.
  public profileVersion?: string;

  // A unique statement identifier. By default generated by the provider.
  public statementId?: string;

  // A statement identifier prefix. The provider will generate a unique suffix. Conflicts with `statement_id`.
  public statementIdPrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "statementIdPrefix",
        "A statement identifier prefix. The provider will generate a unique suffix. Conflicts with `statement_id`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        "An AWS Signer action permitted as part of cross-account permissions. Valid values: `signer:StartSigningJob`, `signer:GetSigningProfile`, `signer:RevokeSignature`, or `signer:SignPayload`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principal",
        "The AWS principal to be granted a cross-account permission.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "profileName",
        "Name of the signing profile to add the cross-account permissions.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "profileVersion",
        "The signing profile version that a permission applies to.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "statementId",
        "A unique statement identifier. By default generated by the provider.",
        [],
        false,
        true,
      ),
    ];
  }
}
