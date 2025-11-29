export interface IRecorderStatus{
    status_detail?: string;
    status: TStatusKeys;
    status_info: TStatusValues;
}

export const StatusEnum = {
    error: "Error recording",
    success : 'Success recording',
    record: "Already recording",
    start: "Recording started",
    stop: "Recording stop",
    no_running: "There is no running record"
} as const;

export type  TStatusValues = (typeof StatusEnum)[keyof typeof StatusEnum];
export type  TStatusKeys = keyof typeof StatusEnum