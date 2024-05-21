import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RegionTargetHttpProxyArgs {
  /*
The Region in which the created target https proxy should reside.
If it is not provided, the provider region is used.
*/
  region?: string;

  /*
A reference to the RegionUrlMap resource that defines the mapping from URL
to the BackendService.


- - -
*/
  urlMap?: string;

  // An optional description of this resource.
  description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class RegionTargetHttpProxy extends Resource {
  /*
The Region in which the created target https proxy should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
A reference to the RegionUrlMap resource that defines the mapping from URL
to the BackendService.


- - -
*/
  public urlMap?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // An optional description of this resource.
  public description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The unique identifier for the resource.
  public proxyId?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The Region in which the created target https proxy should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "urlMap",
        "A reference to the RegionUrlMap resource that defines the mapping from URL\nto the BackendService.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
