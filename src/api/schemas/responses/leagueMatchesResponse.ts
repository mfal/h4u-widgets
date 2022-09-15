import z from "zod";
import { match } from "../components";

export const leagueMatchesResponse = z
  .array(
    z.object({
      content: z.object({
        actualGames: z.array(match),
        futureGames: z.object({ games: z.array(match) })
      })
    })
  )
  .min(1);
