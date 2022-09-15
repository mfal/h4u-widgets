import z from "zod";
import numberCoerce from "../../../lib/numberCoerce";

export const tableEntry = z.object({
  tabTeamname: z.string(),
  tabScore: numberCoerce(z.number().optional()),
  numPlayedGames: z.number(),
  numWonGames: z.number(),
  numEqualGames: z.number(),
  numLostGames: z.number(),
  numGoalsShot: z.number(),
  numGoalsGot: z.number(),
  pointsPlus: z.number(),
  pointsMinus: z.number()
});

export type TableEntry = z.infer<typeof tableEntry>;
