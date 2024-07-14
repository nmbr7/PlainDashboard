import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  signer_SigningJobDestination,
  signer_SigningJobDestination_GetTypes,
} from "../types/signer_SigningJobDestination";
import {
  signer_SigningJobSource,
  signer_SigningJobSource_GetTypes,
} from "../types/signer_SigningJobSource";
import {
  signer_SigningJobRevocationRecord,
  signer_SigningJobRevocationRecord_GetTypes,
} from "../types/signer_SigningJobRevocationRecord";
import {
  signer_SigningJobSignedObject,
  signer_SigningJobSignedObject_GetTypes,
} from "../types/signer_SigningJobSignedObject";

export interface SigningJobArgs {
  // The S3 bucket in which to save your signed object. See Destination below for details.
  destination?: signer_SigningJobDestination;

  // Set this argument to `true` to ignore signing job failures and retrieve failed status and reason. Default `false`.
  ignoreSigningJobFailure?: boolean;

  // The name of the profile to initiate the signing operation.
  profileName?: string;

  // The S3 bucket that contains the object to sign. See Source below for details.
  source?: signer_SigningJobSource;
}
export class SigningJob extends Resource {
  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the signing job was completed.
  public completedAt?: string;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the signing job was created.
  public createdAt?: string;

  // The S3 bucket in which to save your signed object. See Destination below for details.
  public destination?: signer_SigningJobDestination;

  // The ID of the signing job on output.
  public jobId?: string;

  // The name of the profile to initiate the signing operation.
  public profileName?: string;

  // A revocation record if the signature generated by the signing job has been revoked. Contains a timestamp and the ID of the IAM entity that revoked the signature.
  public revocationRecords?: Array<signer_SigningJobRevocationRecord>;

  // The IAM entity that initiated the signing job.
  public jobInvoker?: string;

  // A human-readable name for the signing platform associated with the signing job.
  public platformDisplayName?: string;

  // The version of the signing profile used to initiate the signing job.
  public profileVersion?: string;

  // Status of the signing job.
  public status?: string;

  // String value that contains the status reason.
  public statusReason?: string;

  // Set this argument to `true` to ignore signing job failures and retrieve failed status and reason. Default `false`.
  public ignoreSigningJobFailure?: boolean;

  // The AWS account ID of the job owner.
  public jobOwner?: string;

  // The platform to which your signed code image will be distributed.
  public platformId?: string;

  // The IAM principal that requested the signing job.
  public requestedBy?: string;

  // The time when the signature of a signing job expires.
  public signatureExpiresAt?: string;

  // Name of the S3 bucket where the signed code image is saved by code signing.
  public signedObjects?: Array<signer_SigningJobSignedObject>;

  // The S3 bucket that contains the object to sign. See Source below for details.
  public source?: signer_SigningJobSource;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "ignoreSigningJobFailure",
        "Set this argument to `true` to ignore signing job failures and retrieve failed status and reason. Default `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "profileName",
        "The name of the profile to initiate the signing operation.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "source",
        "The S3 bucket that contains the object to sign. See Source below for details.",
        signer_SigningJobSource_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "destination",
        "The S3 bucket in which to save your signed object. See Destination below for details.",
        signer_SigningJobDestination_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
