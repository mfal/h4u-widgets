import React, { FC } from "react";
import Match from "../../../models/Match";
import { DateTime } from "luxon";

interface Props {
  match: Match;
}

export const MatchDate: FC<Props> = (props) => {
  const { match } = props;

  if (match.date === undefined) {
    return null;
  }

  const isInPast = DateTime.now() > match.date;

  const isInSameWeek =
    match.date.startOf("week") === DateTime.now().startOf("week");

  const format = isInPast
    ? "ccc, dd.MM.yy"
    : isInSameWeek
    ? "ccc, hh:mm"
    : "dd.MM.yy, hh:mm";

  return <>{match.date.toFormat(format)}</>;
};

export default MatchDate;
