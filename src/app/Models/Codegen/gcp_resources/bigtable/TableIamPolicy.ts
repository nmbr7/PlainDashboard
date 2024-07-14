import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TableIamPolicyArgs {
  // The name or relative resource id of the instance that owns the table.
  instance?: string;

  /*
The policy data generated by a `gcp.organizations.getIAMPolicy` data source.

- - -
*/
  policyData?: string;

  /*
The project in which the table belongs. If it
is not provided, this provider will use the provider default.
*/
  project?: string;

  /*
The name or relative resource id of the table to manage IAM policies for.

For `gcp.bigtable.TableIamMember` or `gcp.bigtable.TableIamBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  table?: string;
}
export class TableIamPolicy extends Resource {
  // The name or relative resource id of the instance that owns the table.
  public instance?: string;

  /*
The policy data generated by a `gcp.organizations.getIAMPolicy` data source.

- - -
*/
  public policyData?: string;

  /*
The project in which the table belongs. If it
is not provided, this provider will use the provider default.
*/
  public project?: string;

  /*
The name or relative resource id of the table to manage IAM policies for.

For `gcp.bigtable.TableIamMember` or `gcp.bigtable.TableIamBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public table?: string;

  // (Computed) The etag of the tables's IAM policy.
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The name or relative resource id of the instance that owns the table.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyData",
        "The policy data generated by a `gcp.organizations.getIAMPolicy` data source.\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the table belongs. If it\nis not provided, this provider will use the provider default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "table",
        "The name or relative resource id of the table to manage IAM policies for.\n\nFor `gcp.bigtable.TableIamMember` or `gcp.bigtable.TableIamBinding`:\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        [],
        true,
        true,
      ),
    ];
  }
}