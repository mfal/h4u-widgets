import z from "zod";

export const age = z.union([
  z.literal("M"),
  z.literal("F"),
  z.literal("A"),
  z.literal("B"),
  z.literal("C"),
  z.literal("D"),
  z.literal("E"),
  z.literal("Mini")
]);
export type Age = z.infer<typeof age>;
