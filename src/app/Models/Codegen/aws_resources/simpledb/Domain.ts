import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DomainArgs {
  // The name of the SimpleDB domain
  name?: string;
}
export class Domain extends Resource {
  // The name of the SimpleDB domain
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the SimpleDB domain",
        [],
        false,
        false,
      ),
    ];
  }
}
