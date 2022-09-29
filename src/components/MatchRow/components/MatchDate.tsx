import React, { FC } from "react";
import Match from "../../../models/Match";
import { DateTime } from "luxon";
import { isDefined } from "ts-extras";
import invariant from "invariant";

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

  const isTimeSet = match.date.startOf("day") === match.date;

  const formats: Array<[boolean, string]> = [
    [isInPast, "ccc, dd.MM.yy"],
    [isInSameWeek && isTimeSet, "ccc, HH:mm"],
    [isInSameWeek, "ccc"],
    [isTimeSet, "dd.MM.yy, HH:mm"],
    [true, "dd.MM.yy"]
  ];

  const matchedFormat = formats.find(([matches]) => matches);

  invariant(isDefined(matchedFormat), "No matching format found");

  return <>{match.date.toFormat(matchedFormat[1])}</>;
};

export default MatchDate;
