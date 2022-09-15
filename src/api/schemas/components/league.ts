import z from "zod";
import { gender } from "./gender";
import { age } from "./age";

export const league = z.object({
  gClassID: z.string(),
  gClassLname: z.string(),
  gClassGender: gender,
  gClassAGsDesc: age
});

export type League = z.infer<typeof league>;
