import { EventualData } from "./types";

export const promiseCache = new Map<number, Promise<any>>();
export const resultCache = new Map<number, EventualData<any>>();
