import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkservices_HttpRouteRule,
  networkservices_HttpRouteRule_GetTypes,
} from "../types/networkservices_HttpRouteRule";

export interface HttpRouteArgs {
  /*
Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.
*/
  meshes?: Array<string>;

  // Name of the HttpRoute resource.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  rules?: Array<networkservices_HttpRouteRule>;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  gateways?: Array<string>;

  // Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.
  hostnames?: Array<string>;

  /*
Set of label tags associated with the HttpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;
}
export class HttpRoute extends DS_Resource {
  // Time the HttpRoute was created in UTC.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  public gateways?: Array<string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Server-defined URL of this resource.
  public selfLink?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  // Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.
  public hostnames?: Array<string>;

  /*
Set of label tags associated with the HttpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.
*/
  public meshes?: Array<string>;

  // Name of the HttpRoute resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  public rules?: Array<networkservices_HttpRouteRule>;

  // Time the HttpRoute was updated in UTC.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the HttpRoute resource.",
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
        InputType.Array,
        "rules",
        "Rules that define how traffic is routed and handled.\nStructure is documented below.",
        () => networkservices_HttpRouteRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "gateways",
        "Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.\nEach gateway reference should match the pattern: projects/*/locations/global/gateways/<gateway_name>",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "hostnames",
        "Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the HttpRoute resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "meshes",
        "Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.\nEach mesh reference should match the pattern: projects/*/locations/global/meshes/<mesh_name>.\nThe attached Mesh should be of a type SIDECAR.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
