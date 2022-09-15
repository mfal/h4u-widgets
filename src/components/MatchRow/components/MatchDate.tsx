import React, { FC } from "react";
import Match from "../../../models/Match";
import { DateTime } from "luxon";

interface Props {
  match: Match;
}

export const MatchDate: FC<Props> = (props) => {
  const { match } = props;
  const diff = match.date.diff(DateTime.now());

  const isInSameWeek =
    match.date.startOf("week") === DateTime.now().startOf("week");

  const format =
    diff.milliseconds < 0
      ? "ccc, dd.MM.yy"
      : isInSameWeek
      ? "ccc, hh:mm"
      : "dd.MM.yy, hh:mm";
  return <>{match.date.toFormat(format)}</>;
};

export default MatchDate;
