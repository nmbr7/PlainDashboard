import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualServiceSpec,
  appmesh_VirtualServiceSpec_GetTypes,
} from "../types/appmesh_VirtualServiceSpec";

export interface VirtualServiceArgs {
  // Virtual service specification to apply.
  spec?: appmesh_VirtualServiceSpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the service mesh in which to create the virtual service. Must be between 1 and 255 characters in length.
  meshName?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  meshOwner?: string;

  // Name to use for the virtual service. Must be between 1 and 255 characters in length.
  name?: string;
}
export class VirtualService extends DS_Resource {
  // Name to use for the virtual service. Must be between 1 and 255 characters in length.
  public name?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the virtual service.
  public arn?: string;

  // Creation date of the virtual service.
  public createdDate?: string;

  // Last update date of the virtual service.
  public lastUpdatedDate?: string;

  // Name of the service mesh in which to create the virtual service. Must be between 1 and 255 characters in length.
  public meshName?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  public meshOwner?: string;

  // Resource owner's AWS account ID.
  public resourceOwner?: string;

  // Virtual service specification to apply.
  public spec?: appmesh_VirtualServiceSpec;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "meshOwner",
        "AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name to use for the virtual service. Must be between 1 and 255 characters in length.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spec",
        "Virtual service specification to apply.",
        () => appmesh_VirtualServiceSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "meshName",
        "Name of the service mesh in which to create the virtual service. Must be between 1 and 255 characters in length.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
