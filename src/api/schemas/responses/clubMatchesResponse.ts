import z from "zod";
import { matches } from "../components";

export const clubMatchesResponse = z
  .array(
    z.object({
      head: z.object({
        name: z.string()
      }),
      content: matches
    })
  )
  .min(1);

export type ClubMatchesResponse = z.infer<typeof clubMatchesResponse>;
