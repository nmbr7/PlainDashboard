import { PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences } from "./PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences";

export interface PreferenceSetVirtualMachinePreferencesComputeEnginePreferences {
  /*
The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.
Structure is documented below.
*/
  MachinePreferences?: PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;

  /*
License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.
Possible values:
LICENSE_TYPE_UNSPECIFIED
LICENSE_TYPE_DEFAULT
LICENSE_TYPE_BRING_YOUR_OWN_LICENSE
*/
  LicenseType?: string;
}
