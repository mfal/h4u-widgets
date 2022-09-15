import { z, ZodEffects, ZodTypeAny } from "zod";

const parseNumber = (arg: unknown): number | undefined => {
  if (typeof arg === "string") {
    const asNumber = Number(arg);
    if (asNumber.toString() === arg) {
      return asNumber;
    }
  } else if (typeof arg === "number") {
    return arg;
  }
};

export const numberCoerce = <I extends ZodTypeAny>(schema: I): ZodEffects<I> =>
  z.preprocess(parseNumber, schema);

export default numberCoerce;
