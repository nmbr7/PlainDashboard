import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabaseInstancesInstanceServerCaCert {
  // The CN valid for the CA Cert.
  commonName?: string;

  // Creation time of the CA Cert.
  createTime?: string;

  // Expiration time of the CA Cert.
  expirationTime?: string;

  // SHA Fingerprint of the CA Cert.
  sha1Fingerprint?: string;

  // The CA Certificate used to connect to the SQL Instance via SSL.
  cert?: string;
}

export function sql_getDatabaseInstancesInstanceServerCaCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "commonName",
      "The CN valid for the CA Cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "Creation time of the CA Cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expirationTime",
      "Expiration time of the CA Cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sha1Fingerprint",
      "SHA Fingerprint of the CA Cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cert",
      "The CA Certificate used to connect to the SQL Instance via SSL.",
      [],
      true,
      false,
    ),
  ];
}
