import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_ReservationAutoscale,
  bigquery_ReservationAutoscale_GetTypes,
} from "../types/bigquery_ReservationAutoscale";

export interface ReservationArgs {
  /*
The configuration parameters for the auto scaling feature.
Structure is documented below.
*/
  autoscale?: bigquery_ReservationAutoscale;

  /*
If false, any query using this reservation will use idle slots from other reservations within
the same admin project. If true, a query using this reservation will execute with the slot
capacity specified above at most.
*/
  ignoreIdleSlots?: boolean;

  /*
Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.
*/
  slotCapacity?: number;

  /*
Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).
If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.
*/
  multiRegionAuxiliary?: boolean;

  /*
The name of the reservation. This field must only contain alphanumeric characters or dash.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Maximum number of queries that are allowed to run concurrently in this reservation. This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.
  concurrency?: number;

  // The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
  edition?: string;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  location?: string;
}
export class Reservation extends Resource {
  /*
If false, any query using this reservation will use idle slots from other reservations within
the same admin project. If true, a query using this reservation will execute with the slot
capacity specified above at most.
*/
  public ignoreIdleSlots?: boolean;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  public location?: string;

  /*
The name of the reservation. This field must only contain alphanumeric characters or dash.


- - -
*/
  public name?: string;

  /*
Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.
*/
  public slotCapacity?: number;

  // Maximum number of queries that are allowed to run concurrently in this reservation. This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.
  public concurrency?: number;

  // The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
  public edition?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The configuration parameters for the auto scaling feature.
Structure is documented below.
*/
  public autoscale?: bigquery_ReservationAutoscale;

  /*
Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).
If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.
*/
  public multiRegionAuxiliary?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "concurrency",
        "Maximum number of queries that are allowed to run concurrently in this reservation. This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The geographic location where the transfer config should reside.\nExamples: US, EU, asia-northeast1. The default value is US.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "slotCapacity",
        "Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the\nunit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ignoreIdleSlots",
        "If false, any query using this reservation will use idle slots from other reservations within\nthe same admin project. If true, a query using this reservation will execute with the slot\ncapacity specified above at most.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiRegionAuxiliary",
        "Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).\nIf set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the reservation. This field must only contain alphanumeric characters or dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "edition",
        "The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoscale",
        "The configuration parameters for the auto scaling feature.\nStructure is documented below.",
        bigquery_ReservationAutoscale_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
