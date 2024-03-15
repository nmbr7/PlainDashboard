export interface InstanceGceSetupShieldedInstanceConfig {
  /*
Optional. Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.
*/
  EnableIntegrityMonitoring?: boolean;

  /*
Optional. Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.
*/
  EnableSecureBoot?: boolean;

  /*
Optional. Defines whether the VM instance has the vTPM enabled.
Enabled by default.
*/
  EnableVtpm?: boolean;
}
