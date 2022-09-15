import z from "zod";
import { tableEntry } from "../components";

export const tableResponse = z
  .array(
    z.object({
      content: z.object({
        score: z.array(tableEntry)
      })
    })
  )
  .min(1);
