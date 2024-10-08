import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  projects_AccessApprovalSettingsEnrolledService,
  projects_AccessApprovalSettingsEnrolledService_GetTypes,
} from "../types/projects_AccessApprovalSettingsEnrolledService";

export interface AccessApprovalSettingsArgs {
  /*
The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.
*/
  activeKeyVersion?: string;

  /*
A list of Google Cloud Services for which the given resource has Access Approval enrolled.
Access requests for the resource given by name against any of these services contained here will be required
to have explicit approval. Enrollment can only be done on an all or nothing basis.
A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
Structure is documented below.
*/
  enrolledServices?: Array<projects_AccessApprovalSettingsEnrolledService>;

  /*
A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
*/
  notificationEmails?: Array<string>;

  /*
(Optional, Deprecated)
Project id.

> --Warning:-- `project` is deprecated and will be removed in a future major release. Use `project_id` instead.
*/
  project?: string;

  // ID of the project of the access approval settings.
  projectId?: string;
}
export class AccessApprovalSettings extends DS_Resource {
  /*
The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.
*/
  public activeKeyVersion?: string;

  // If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project.
  public enrolledAncestor?: boolean;

  /*
A list of Google Cloud Services for which the given resource has Access Approval enrolled.
Access requests for the resource given by name against any of these services contained here will be required
to have explicit approval. Enrollment can only be done on an all or nothing basis.
A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
Structure is documented below.
*/
  public enrolledServices?: Array<projects_AccessApprovalSettingsEnrolledService>;

  /*
If the field is true, that indicates that there is some configuration issue with the active_key_version
configured on this Project (e.g. it doesn't exist or the Access Approval service account doesn't have the
correct permissions on it, etc.) This key version is not necessarily the effective key version at this level,
as key versions are inherited top-down.
*/
  public invalidKeyVersion?: boolean;

  // ID of the project of the access approval settings.
  public projectId?: string;

  // If the field is true, that indicates that an ancestor of this Project has set active_key_version.
  public ancestorHasActiveKeyVersion?: boolean;

  // The resource name of the settings. Format is "projects/{project_id}/accessApprovalSettings"
  public name?: string;

  /*
A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
*/
  public notificationEmails?: Array<string>;

  /*
(Optional, Deprecated)
Project id.

> --Warning:-- `project` is deprecated and will be removed in a future major release. Use `project_id` instead.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "activeKeyVersion",
        "The asymmetric crypto key version to use for signing approval requests.\nEmpty active_key_version indicates that a Google-managed key should be used for signing.\nThis property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enrolledServices",
        "A list of Google Cloud Services for which the given resource has Access Approval enrolled.\nAccess requests for the resource given by name against any of these services contained here will be required\nto have explicit approval. Enrollment can only be done on an all or nothing basis.\nA maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.\nStructure is documented below.",
        () => projects_AccessApprovalSettingsEnrolledService_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationEmails",
        "A list of email addresses to which notifications relating to approval requests should be sent.\nNotifications relating to a resource will be sent to all emails in the settings of ancestor\nresources of that resource. A maximum of 50 email addresses are allowed.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "(Optional, Deprecated)\nProject id.\n\n> **Warning:** `project` is deprecated and will be removed in a future major release. Use `project_id` instead.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectId",
        "ID of the project of the access approval settings.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
