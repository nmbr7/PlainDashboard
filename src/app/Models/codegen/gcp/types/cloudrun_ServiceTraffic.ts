import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrun_ServiceTraffic {
  /*
LatestRevision may be optionally provided to indicate that the latest ready
Revision of the Configuration should be used for this traffic target. When
provided LatestRevision must be true if RevisionName is empty; it must be
false when RevisionName is non-empty.
*/
  latestRevision?: boolean;

  // Percent specifies percent of the traffic to this Revision or Configuration.
  percent?: number;

  // RevisionName of a specific revision to which to send this portion of traffic.
  revisionName?: string;

  // Tag is optionally used to expose a dedicated url for referencing this target exclusively.
  tag?: string;

  /*
(Output)
URL displays the URL for accessing tagged traffic targets. URL is displayed in status,
and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,
but may not contain anything else (e.g. basic auth, url path, etc.)
*/
  url?: string;
}

export function cloudrun_ServiceTraffic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "latestRevision",
      "LatestRevision may be optionally provided to indicate that the latest ready\nRevision of the Configuration should be used for this traffic target. When\nprovided LatestRevision must be true if RevisionName is empty; it must be\nfalse when RevisionName is non-empty.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percent",
      "Percent specifies percent of the traffic to this Revision or Configuration.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revisionName",
      "RevisionName of a specific revision to which to send this portion of traffic.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      "Tag is optionally used to expose a dedicated url for referencing this target exclusively.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "(Output)\nURL displays the URL for accessing tagged traffic targets. URL is displayed in status,\nand is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,\nbut may not contain anything else (e.g. basic auth, url path, etc.)",
      () => [],
      false,
      false,
    ),
  ];
}
