import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_NodeTemplateServerBinding,
  compute_NodeTemplateServerBinding_GetTypes,
} from "../types/compute_NodeTemplateServerBinding";
import {
  compute_NodeTemplateNodeTypeFlexibility,
  compute_NodeTemplateNodeTypeFlexibility_GetTypes,
} from "../types/compute_NodeTemplateNodeTypeFlexibility";

export interface NodeTemplateArgs {
  /*
CPU overcommit.
Default value is `NONE`.
Possible values are: `ENABLED`, `NONE`.
*/
  cpuOvercommitType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The server binding policy for nodes using this template. Determines
where the nodes should restart following a maintenance event.
Structure is documented below.
*/
  serverBinding?: compute_NodeTemplateServerBinding;

  // An optional textual description of the resource.
  description?: string;

  // Name of the resource.
  name?: string;

  /*
Labels to use for node affinity, which will be used in
instance scheduling.
*/
  nodeAffinityLabels?: Map<string, string>;

  /*
Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified.
*/
  nodeType?: string;

  /*
Flexible properties for the desired node type. Node groups that
use this node template will create nodes of a type that matches
these properties. Only one of nodeTypeFlexibility and nodeType can
be specified.
Structure is documented below.
*/
  nodeTypeFlexibility?: compute_NodeTemplateNodeTypeFlexibility;

  /*
Region where nodes using the node template will be created.
If it is not provided, the provider region is used.
*/
  region?: string;
}
export class NodeTemplate extends Resource {
  /*
CPU overcommit.
Default value is `NONE`.
Possible values are: `ENABLED`, `NONE`.
*/
  public cpuOvercommitType?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // An optional textual description of the resource.
  public description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The server binding policy for nodes using this template. Determines
where the nodes should restart following a maintenance event.
Structure is documented below.
*/
  public serverBinding?: compute_NodeTemplateServerBinding;

  // Name of the resource.
  public name?: string;

  /*
Labels to use for node affinity, which will be used in
instance scheduling.
*/
  public nodeAffinityLabels?: Map<string, string>;

  /*
Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified.
*/
  public nodeType?: string;

  /*
Flexible properties for the desired node type. Node groups that
use this node template will create nodes of a type that matches
these properties. Only one of nodeTypeFlexibility and nodeType can
be specified.
Structure is documented below.
*/
  public nodeTypeFlexibility?: compute_NodeTemplateNodeTypeFlexibility;

  /*
Region where nodes using the node template will be created.
If it is not provided, the provider region is used.
*/
  public region?: string;

  // The URI of the created resource.
  public selfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "nodeTypeFlexibility",
        "Flexible properties for the desired node type. Node groups that\nuse this node template will create nodes of a type that matches\nthese properties. Only one of nodeTypeFlexibility and nodeType can\nbe specified.\nStructure is documented below.",
        compute_NodeTemplateNodeTypeFlexibility_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cpuOvercommitType",
        "CPU overcommit.\nDefault value is `NONE`.\nPossible values are: `ENABLED`, `NONE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serverBinding",
        "The server binding policy for nodes using this template. Determines\nwhere the nodes should restart following a maintenance event.\nStructure is documented below.",
        compute_NodeTemplateServerBinding_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "nodeAffinityLabels",
        "Labels to use for node affinity, which will be used in\ninstance scheduling.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "nodeType",
        "Node type to use for nodes group that are created from this template.\nOnly one of nodeTypeFlexibility and nodeType can be specified.",
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
        "description",
        "An optional textual description of the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "Region where nodes using the node template will be created.\nIf it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
