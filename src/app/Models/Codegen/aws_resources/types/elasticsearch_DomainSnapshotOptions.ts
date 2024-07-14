import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticsearch_DomainSnapshotOptions {
  // Hour during which the service takes an automated daily snapshot of the indices in the domain.
  automatedSnapshotStartHour?: number;
}

export function elasticsearch_DomainSnapshotOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "automatedSnapshotStartHour",
      "Hour during which the service takes an automated daily snapshot of the indices in the domain.",
      [],
      true,
      false,
    ),
  ];
}
