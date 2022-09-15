import z from "zod";

export const gender = z.union([z.literal("m"), z.literal("w"), z.literal("g")]);

export type Gender = z.infer<typeof gender>;
