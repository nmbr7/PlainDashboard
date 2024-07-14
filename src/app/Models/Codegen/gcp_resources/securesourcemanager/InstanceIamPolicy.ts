import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface InstanceIamPolicyArgs {
  //
  instanceId?: string;

  //
  location?: string;

  //
  policyData?: string;

  //
  project?: string;
}
export class InstanceIamPolicy extends Resource {
  //
  public etag?: string;

  //
  public instanceId?: string;

  //
  public location?: string;

  //
  public policyData?: string;

  //
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "instanceId", "", [], true, true),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(InputType.String, "policyData", "", [], true, false),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
    ];
  }
}
