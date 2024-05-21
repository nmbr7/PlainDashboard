import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_DatabaseInstanceServerCaCert {
  // The CN valid for the CA Cert.
  commonName?: string;

  // Creation time of the CA Cert.
  createTime?: string;

  /*
The [RFC 3339](https://tools.ietf.org/html/rfc3339)
formatted date time string indicating when this whitelist expires.
*/
  expirationTime?: string;

  // SHA Fingerprint of the CA Cert.
  sha1Fingerprint?: string;

  // The CA Certificate used to connect to the SQL Instance via SSL.
  cert?: string;
}

export function sql_DatabaseInstanceServerCaCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "commonName",
      "The CN valid for the CA Cert.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "Creation time of the CA Cert.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expirationTime",
      "The [RFC 3339](https://tools.ietf.org/html/rfc3339)\nformatted date time string indicating when this whitelist expires.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sha1Fingerprint",
      "SHA Fingerprint of the CA Cert.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cert",
      "The CA Certificate used to connect to the SQL Instance via SSL.",
      [],
      false,
      false,
    ),
  ];
}
