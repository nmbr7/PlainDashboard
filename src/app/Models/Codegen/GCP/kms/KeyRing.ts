import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface KeyRingArgs {
  /*
The location for the KeyRing.
A full list of valid locations can be found by running `gcloud kms locations list`.


- - -
*/
  Location?: string;

  // The resource name for the KeyRing.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class KeyRing extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The location for the KeyRing.
A full list of valid locations can be found by running `gcloud kms locations list`.


- - -
*/
  public Location?: string;

  // The resource name for the KeyRing.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name for the KeyRing.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the KeyRing.\nA full list of valid locations can be found by running `gcloud kms locations list`.\n\n\n- - -",
      ),
    ];
  }
}
