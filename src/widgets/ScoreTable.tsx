import React, { FC } from "react";
import { MatchesSkeletonView } from "../components/MatchesSkeletonView";
import widgetRegistry from "../WidgetRegistry";
import { z } from "zod";
import numberCoerce from "../lib/numberCoerce";
import usePromiseResult from "../hooks/usePromiseResult/usePromiseResult";
import { apiClient } from "../api/client";
import { Club } from "../models";
import { ClubContext } from "../components/ClubContext";
import ScoreTable from "../components/ScoreTable/ScoreTable";

const propsSchema = z.object({
  classId: numberCoerce(z.number()),
  clubName: z.string()
});

const ScoreTableWidget: FC<z.infer<typeof propsSchema>> = (props) => {
  const { classId, clubName } = props;

  const tableEntries = usePromiseResult(
    apiClient,
    "getScoreTableEntries",
    classId
  );
  const club = new Club(clubName);

  return (
    <ClubContext value={club}>
      <ScoreTable entries={tableEntries} />
    </ClubContext>
  );
};

widgetRegistry.register(
  "score-table",
  ScoreTableWidget,
  <MatchesSkeletonView />,
  propsSchema
);
