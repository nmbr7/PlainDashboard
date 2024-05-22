import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  globalaccelerator_CustomRoutingListenerPortRange,
  globalaccelerator_CustomRoutingListenerPortRange_GetTypes,
} from "../types/globalaccelerator_CustomRoutingListenerPortRange";

export interface CustomRoutingListenerArgs {
  // The Amazon Resource Name (ARN) of a custom routing accelerator.
  acceleratorArn?: string;

  // The list of port ranges for the connections from clients to the accelerator. Fields documented below.
  portRanges?: Array<globalaccelerator_CustomRoutingListenerPortRange>;
}
export class CustomRoutingListener extends Resource {
  // The Amazon Resource Name (ARN) of a custom routing accelerator.
  public acceleratorArn?: string;

  // The list of port ranges for the connections from clients to the accelerator. Fields documented below.
  public portRanges?: Array<globalaccelerator_CustomRoutingListenerPortRange>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "acceleratorArn",
        "The Amazon Resource Name (ARN) of a custom routing accelerator.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "portRanges",
        "The list of port ranges for the connections from clients to the accelerator. Fields documented below.",
        globalaccelerator_CustomRoutingListenerPortRange_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
