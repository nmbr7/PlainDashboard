import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigee_KeystoresAliasesKeyCertFileCertsInfo,
  apigee_KeystoresAliasesKeyCertFileCertsInfo_GetTypes,
} from "../types/apigee_KeystoresAliasesKeyCertFileCertsInfo";

export interface KeystoresAliasesKeyCertFileArgs {
  // Password for the Private Key if it's encrypted
  password?: string;

  // Alias Name
  alias?: string;

  /*
Cert content


- - -
*/
  cert?: string;

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  certsInfo?: apigee_KeystoresAliasesKeyCertFileCertsInfo;

  // Environment associated with the alias
  environment?: string;

  // Private Key content, omit if uploading to truststore
  key?: string;

  // Keystore Name
  keystore?: string;

  // Organization ID associated with the alias, without organization/ prefix
  orgId?: string;
}
export class KeystoresAliasesKeyCertFile extends Resource {
  /*
Cert content


- - -
*/
  public cert?: string;

  // Keystore Name
  public keystore?: string;

  // Password for the Private Key if it's encrypted
  public password?: string;

  // Alias Name
  public alias?: string;

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public certsInfo?: apigee_KeystoresAliasesKeyCertFileCertsInfo;

  // Environment associated with the alias
  public environment?: string;

  // Private Key content, omit if uploading to truststore
  public key?: string;

  // Organization ID associated with the alias, without organization/ prefix
  public orgId?: string;

  // Optional.Type of Alias
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "key",
        "Private Key content, omit if uploading to truststore",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keystore",
        "Keystore Name",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "Organization ID associated with the alias, without organization/ prefix",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "Password for the Private Key if it's encrypted",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "alias",
        "Alias Name",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cert",
        "Cert content\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "certsInfo",
        "Chain of certificates under this alias.\nStructure is documented below.",
        apigee_KeystoresAliasesKeyCertFileCertsInfo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "environment",
        "Environment associated with the alias",
        [],
        true,
        true,
      ),
    ];
  }
}
