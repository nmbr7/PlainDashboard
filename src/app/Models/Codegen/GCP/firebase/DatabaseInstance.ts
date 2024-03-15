import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DatabaseInstanceArgs {
  // The intended database state.
  DesiredState?: string;

  /*
The globally unique identifier of the Firebase Realtime Database instance.
Instance IDs cannot be reused after deletion.


- - -
*/
  InstanceId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A reference to the region where the Firebase Realtime database resides.
Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations)
*/
  Region?: string;

  /*
The database type.
Each project can create one default Firebase Realtime Database, which cannot be deleted once created.
Creating user Databases is only available for projects on the Blaze plan.
Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo.
Default value is `USER_DATABASE`.
Possible values are: `DEFAULT_DATABASE`, `USER_DATABASE`.
*/
  Type?: string;
}
export class DatabaseInstance extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A reference to the region where the Firebase Realtime database resides.
Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations)
*/
  public Region?: string;

  // The current database state. Set desired_state to :DISABLED to disable the database and :ACTIVE to reenable the database
  public State?: string;

  /*
The database type.
Each project can create one default Firebase Realtime Database, which cannot be deleted once created.
Creating user Databases is only available for projects on the Blaze plan.
Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo.
Default value is `USER_DATABASE`.
Possible values are: `DEFAULT_DATABASE`, `USER_DATABASE`.
*/
  public Type?: string;

  /*
The database URL in the form of https://{instance-id}.firebaseio.com for us-central1 instances
or https://{instance-id}.{region}.firebasedatabase.app in other regions.
*/
  public DatabaseUrl?: string;

  // The intended database state.
  public DesiredState?: string;

  /*
The globally unique identifier of the Firebase Realtime Database instance.
Instance IDs cannot be reused after deletion.


- - -
*/
  public InstanceId?: string;

  /*
The fully-qualified resource name of the Firebase Realtime Database, in the
format: projects/PROJECT_NUMBER/locations/REGION_IDENTIFIER/instances/INSTANCE_ID
PROJECT_NUMBER: The Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)
Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DesiredState",
        "The intended database state.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "The globally unique identifier of the Firebase Realtime Database instance.\nInstance IDs cannot be reused after deletion.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region where the Firebase Realtime database resides.\nCheck all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations)",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The database type.\nEach project can create one default Firebase Realtime Database, which cannot be deleted once created.\nCreating user Databases is only available for projects on the Blaze plan.\nProjects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo.\nDefault value is `USER_DATABASE`.\nPossible values are: `DEFAULT_DATABASE`, `USER_DATABASE`.",
      ),
    ];
  }
}
