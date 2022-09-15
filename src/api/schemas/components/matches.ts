import z from "zod";
import { league } from "./league";
import { match } from "./match";

export const matches = z.object({
  classes: z.array(league.extend({ games: z.array(match) }))
});

export type Matches = z.infer<typeof matches>;
