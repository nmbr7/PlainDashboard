import { TransferJobScheduleScheduleEndDate } from "./TransferJobScheduleScheduleEndDate";
import { TransferJobScheduleScheduleStartDate } from "./TransferJobScheduleScheduleStartDate";
import { TransferJobScheduleStartTimeOfDay } from "./TransferJobScheduleStartTimeOfDay";

export interface TransferJobSchedule {
  // Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  RepeatInterval?: string;

  // The last day the recurring transfer will be run. If `schedule_end_date` is the same as `schedule_start_date`, the transfer will be executed only once. Structure documented below.
  ScheduleEndDate?: TransferJobScheduleScheduleEndDate;

  // The first day the recurring transfer is scheduled to run. If `schedule_start_date` is in the past, the transfer will run for the first time on the following day. Structure documented below.
  ScheduleStartDate?: TransferJobScheduleScheduleStartDate;

  // The time in UTC at which the transfer will be scheduled to start in a day. Transfers may start later than this time. If not specified, recurring and one-time transfers that are scheduled to run today will run immediately; recurring transfers that are scheduled to run on a future date will start at approximately midnight UTC on that date. Note that when configuring a transfer with the Cloud Platform Console, the transfer's start time in a day is specified in your local timezone. Structure documented below.
  StartTimeOfDay?: TransferJobScheduleStartTimeOfDay;
}
