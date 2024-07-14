import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketWebsite {
  // An absolute path to the document to return in case of a 4XX error.
  errorDocument?: string;

  // Amazon S3 returns this index document when requests are made to the root domain or any of the subfolders.
  indexDocument?: string;

  // A hostname to redirect all website requests for this bucket to. Hostname can optionally be prefixed with a protocol (`http://` or `https://`) to use when redirecting requests. The default is the protocol that is used in the original request.
  redirectAllRequestsTo?: string;

  /*
A json array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)
describing redirect behavior and when redirects are applied.

The `CORS` object supports the following:
*/
  routingRules?: string;
}

export function s3_BucketWebsite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "errorDocument",
      "An absolute path to the document to return in case of a 4XX error.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "indexDocument",
      "Amazon S3 returns this index document when requests are made to the root domain or any of the subfolders.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redirectAllRequestsTo",
      "A hostname to redirect all website requests for this bucket to. Hostname can optionally be prefixed with a protocol (`http://` or `https://`) to use when redirecting requests. The default is the protocol that is used in the original request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routingRules",
      "A json array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)\ndescribing redirect behavior and when redirects are applied.\n\nThe `CORS` object supports the following:",
      [],
      false,
      false,
    ),
  ];
}
