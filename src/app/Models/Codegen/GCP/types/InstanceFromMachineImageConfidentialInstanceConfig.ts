export interface InstanceFromMachineImageConfidentialInstanceConfig {
  /*
Specifies which confidential computing technology to use.
								This could be one of the following values: SEV, SEV_SNP.
								If SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.
*/
  ConfidentialInstanceType?: string;

  // Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release
  EnableConfidentialCompute?: boolean;
}
