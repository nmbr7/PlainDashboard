import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RoleAssociationArgs {
  // The AWS SSO group ids to be assigned the role given in `role`.
  groupIds?: Array<string>;

  // The grafana role. Valid values can be found [here](https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateInstruction.html#ManagedGrafana-Type-UpdateInstruction-role).
  role?: string;

  // The AWS SSO user ids to be assigned the role given in `role`.
  userIds?: Array<string>;

  /*
The workspace id.

The following arguments are optional:
*/
  workspaceId?: string;
}
export class RoleAssociation extends Resource {
  // The AWS SSO group ids to be assigned the role given in `role`.
  public groupIds?: Array<string>;

  // The grafana role. Valid values can be found [here](https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateInstruction.html#ManagedGrafana-Type-UpdateInstruction-role).
  public role?: string;

  // The AWS SSO user ids to be assigned the role given in `role`.
  public userIds?: Array<string>;

  /*
The workspace id.

The following arguments are optional:
*/
  public workspaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "userIds",
        "The AWS SSO user ids to be assigned the role given in `role`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workspaceId",
        "The workspace id.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "groupIds",
        "The AWS SSO group ids to be assigned the role given in `role`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The grafana role. Valid values can be found [here](https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateInstruction.html#ManagedGrafana-Type-UpdateInstruction-role).",
        [],
        true,
        false,
      ),
    ];
  }
}
