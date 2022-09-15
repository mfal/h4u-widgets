export type EventualData<T> =
  | {
      isSet: false;
    }
  | {
      isSet: true;
      data: T;
    };

export type AsyncMethodName<T extends {}, K extends keyof T> = T[K] extends (
  ...args: any[]
) => Promise<any>
  ? K
  : never;

export type AsyncMethodResult<T extends {}, K extends keyof T> = T[K] extends (
  ...args: any[]
) => Promise<infer TResult>
  ? TResult
  : never;

export type AsyncMethodArgs<T extends {}, K extends keyof T> = T[K] extends (
  ...args: infer TArgs
) => Promise<any>
  ? TArgs
  : never[];

export type AsyncMethod<T extends {}, K extends keyof T> = (
  ...args: AsyncMethodArgs<T, K>
) => Promise<AsyncMethodResult<T, K>>;
