import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_MangedSslCertificateManaged,
  compute_MangedSslCertificateManaged_GetTypes,
} from "../types/compute_MangedSslCertificateManaged";

export interface MangedSslCertificateArgs {
  /*
Enum field whose value is always `MANAGED` - used to signal to the API
which type this is.
Default value is `MANAGED`.
Possible values are: `MANAGED`.
*/
  type?: string;

  // The unique identifier for the resource.
  certificateId?: number;

  // An optional description of this resource.
  description?: string;

  /*
Properties relevant to a managed certificate.  These will be used if the
certificate is managed (as indicated by a value of `MANAGED` in `type`).
Structure is documented below.
*/
  managed?: compute_MangedSslCertificateManaged;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class MangedSslCertificate extends DS_Resource {
  // An optional description of this resource.
  public description?: string;

  // Expire time of the certificate in RFC3339 text format.
  public expireTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // Domains associated with the certificate via Subject Alternative Name.
  public subjectAlternativeNames?: Array<string>;

  // The unique identifier for the resource.
  public certificateId?: number;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
Properties relevant to a managed certificate.  These will be used if the
certificate is managed (as indicated by a value of `MANAGED` in `type`).
Structure is documented below.
*/
  public managed?: compute_MangedSslCertificateManaged;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.
*/
  public name?: string;

  /*
Enum field whose value is always `MANAGED` - used to signal to the API
which type this is.
Default value is `MANAGED`.
Possible values are: `MANAGED`.
*/
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "managed",
        "Properties relevant to a managed certificate.  These will be used if the\ncertificate is managed (as indicated by a value of `MANAGED` in `type`).\nStructure is documented below.",
        () => compute_MangedSslCertificateManaged_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\nThese are in the same namespace as the managed SSL certificates.",
        () => [],
        false,
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
        "type",
        "Enum field whose value is always `MANAGED` - used to signal to the API\nwhich type this is.\nDefault value is `MANAGED`.\nPossible values are: `MANAGED`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "certificateId",
        "The unique identifier for the resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
