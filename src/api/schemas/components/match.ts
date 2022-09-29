import z from "zod";
import numberCoerce from "../../../lib/numberCoerce";

export const match = z.object({
  gID: z.string(),
  gDate: z.string(),
  gWDay: z.string(),
  gTime: z.string(),
  gGymnasiumName: z.string().nullish(),
  gGymnasiumPostal: z.string().nullish(),
  gGymnasiumTown: z.string().nullish(),
  gGymnasiumStreet: z.string().nullish(),
  gHomeTeam: z.string(),
  gGuestTeam: z.string(),
  gHomeGoals: numberCoerce(z.number().optional()),
  gHomeGoals_1: numberCoerce(z.number().optional()),
  gGuestGoals: numberCoerce(z.number().optional()),
  gGuestGoals_1: numberCoerce(z.number().optional())
});

export type Match = z.infer<typeof match>;
