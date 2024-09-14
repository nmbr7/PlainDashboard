import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_JobIAMBindingCondition,
  dataproc_JobIAMBindingCondition_GetTypes,
} from "../types/dataproc_JobIAMBindingCondition";

export interface JobIAMBindingArgs {
  //
  condition?: dataproc_JobIAMBindingCondition;

  //
  jobId?: string;

  //
  members?: Array<string>;

  /*
The project in which the job belongs. If it
is not provided, the provider will use a default.
*/
  project?: string;

  /*
The region in which the job belongs. If it
is not provided, the provider will use a default.
*/
  region?: string;

  /*
The role that should be applied. Only one
`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.JobIAMPolicy` only:
*/
  role?: string;
}
export class JobIAMBinding extends DS_Resource {
  /*
The role that should be applied. Only one
`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.JobIAMPolicy` only:
*/
  public role?: string;

  //
  public condition?: dataproc_JobIAMBindingCondition;

  // (Computed) The etag of the jobs's IAM policy.
  public etag?: string;

  //
  public jobId?: string;

  //
  public members?: Array<string>;

  /*
The project in which the job belongs. If it
is not provided, the provider will use a default.
*/
  public project?: string;

  /*
The region in which the job belongs. If it
is not provided, the provider will use a default.
*/
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        () => dataproc_JobIAMBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "jobId", "", () => [], true, true),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the job belongs. If it\nis not provided, the provider will use a default.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region in which the job belongs. If it\nis not provided, the provider will use a default.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.\n\n`gcp.dataproc.JobIAMPolicy` only:",
        () => [],
        true,
        true,
      ),
    ];
  }
}