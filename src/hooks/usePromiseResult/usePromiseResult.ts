import { hash } from "object-code";
import { promiseCache, resultCache } from "./caches";
import {
  AsyncMethod,
  AsyncMethodArgs,
  AsyncMethodName,
  AsyncMethodResult
} from "./types";
import invariant from "invariant";

export const usePromiseResult = <T extends {}, K extends keyof T>(
  subject: T,
  methodName: AsyncMethodName<T, K>,
  ...args: AsyncMethodArgs<T, K>
): AsyncMethodResult<T, K> => {
  const key = hash([subject.constructor.name, methodName, ...args]);

  if (!promiseCache.has(key)) {
    const load = subject[methodName] as AsyncMethod<T, K>;

    const loadingPromise = load(...args)
      .then((data) => {
        resultCache.set(key, {
          isSet: true,
          data
        });
        promiseCache.delete(key);
      })
      .catch((error) => {
        resultCache.set(key, {
          isSet: true,
          data: error
        });
        promiseCache.delete(key);
      });

    promiseCache.set(key, loadingPromise);
  }

  const cached = resultCache.get(key);

  if (cached?.isSet) {
    if (cached.data instanceof Error) {
      throw cached.data;
    }
    return cached.data;
  }

  const loadingPromise = promiseCache.get(key);
  invariant(!!loadingPromise, `Promise not found in cache: ${key} is missing`);
  throw loadingPromise;
};

export default usePromiseResult;
