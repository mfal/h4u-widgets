import React, { FC } from "react";
import { MatchesSkeletonView } from "../components/MatchesSkeletonView";
import MatchesTable from "../components/MatchesTable";
import widgetRegistry from "../WidgetRegistry";
import { z } from "zod";
import numberCoerce from "../lib/numberCoerce";
import usePromiseResult from "../hooks/usePromiseResult/usePromiseResult";
import { apiClient } from "../api/client";
import { Club } from "../models";
import { ClubContext } from "../components/ClubContext";

const propsSchema = z.object({
  classId: numberCoerce(z.number()),
  clubName: z.string()
});

const TeamMatches: FC<z.infer<typeof propsSchema>> = (props) => {
  const { classId, clubName } = props;

  const leagueMatches = usePromiseResult(
    apiClient,
    "getLeagueMatches",
    classId
  );

  const club = new Club(clubName);

  return (
    <ClubContext value={club}>
      <MatchesTable matches={leagueMatches.futureMatchesOfClub(club)} />
    </ClubContext>
  );
};

widgetRegistry.register(
  "league-matches",
  TeamMatches,
  <MatchesSkeletonView />,
  propsSchema
);
