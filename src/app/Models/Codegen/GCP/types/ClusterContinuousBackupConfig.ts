import { ClusterContinuousBackupConfigEncryptionConfig } from "./ClusterContinuousBackupConfigEncryptionConfig";

export interface ClusterContinuousBackupConfig {
  // Whether continuous backup recovery is enabled. If not set, defaults to true.
  Enabled?: boolean;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  EncryptionConfig?: ClusterContinuousBackupConfigEncryptionConfig;

  /*
The numbers of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window.
If not set, defaults to 14 days.
*/
  RecoveryWindowDays?: number;
}
