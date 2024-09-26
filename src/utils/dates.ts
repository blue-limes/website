import { DateTime } from "luxon";

export function machineDate(date: Date) {
  return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
}

export function machineDateFromString(dateIso: string) {
  return DateTime.fromISO(dateIso).toFormat("yyyy-MM-dd");
}

export function humanDate(date: Date) {
  return DateTime.fromJSDate(date).toFormat("LLLL dd, yyyy");
}

export function humanDateFromString(dateIso: string) {
  return DateTime.fromISO(dateIso).toFormat("LLLL dd, yyyy");
}

export function humanDateWithDay(date: Date) {
  return DateTime.fromJSDate(date).toFormat("ccc, dd LLLL yyyy");
}

export function humanDateWithDayFromString(dateIso: string) {
  return DateTime.fromISO(dateIso).toFormat("ccc, dd LLLL yyyy");
}
