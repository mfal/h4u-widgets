import z from "zod";
import numberCoerce from "../../../lib/numberCoerce";

export const match = z.object({
  gID: z.string(),
  gDate: z.string(),
  gWDay: z.string(),
  gTime: z.string(),
  gGymnasiumName: z.string().optional(),
  gGymnasiumPostal: z.string().optional(),
  gGymnasiumTown: z.string().optional(),
  gGymnasiumStreet: z.string().optional(),
  gHomeTeam: z.string(),
  gGuestTeam: z.string(),
  gHomeGoals: numberCoerce(z.number().optional()),
  gHomeGoals_1: numberCoerce(z.number().optional()),
  gGuestGoals: numberCoerce(z.number().optional()),
  gGuestGoals_1: numberCoerce(z.number().optional())
});

export type Match = z.infer<typeof match>;
