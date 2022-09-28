import React, { FC } from "react";
import { MatchesSkeletonView } from "../components/MatchesSkeletonView";
import MatchRows from "../components/MatchRows";
import widgetRegistry from "../WidgetRegistry";
import { z } from "zod";
import numberCoerce from "../lib/numberCoerce";
import usePromiseResult from "../hooks/usePromiseResult/usePromiseResult";
import { apiClient } from "../api/client";
import { ClubContext } from "../components/ClubContext";

const propsSchema = z.object({
  clubId: numberCoerce(z.number()),
  weekOffset: numberCoerce(z.number().optional()),
  filter: z.union([z.literal("home"), z.literal("away")]).optional()
});

const ClubMatches: FC<z.infer<typeof propsSchema>> = (props) => {
  const { clubId, weekOffset, filter } = props;

  const clubMatches = usePromiseResult(
    apiClient,
    "getMatchResults",
    clubId,
    weekOffset
  );

  const filteredMatches =
    filter === "home"
      ? clubMatches.getHomeMatches()
      : filter === "away"
      ? clubMatches.getAwayMatches()
      : clubMatches.matches;

  return (
    <ClubContext value={clubMatches.club}>
      <MatchRows matches={filteredMatches} />
    </ClubContext>
  );
};

widgetRegistry.register(
  "club-matches",
  ClubMatches,
  <MatchesSkeletonView />,
  propsSchema
);
