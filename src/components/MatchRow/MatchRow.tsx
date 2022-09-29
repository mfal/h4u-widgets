import React, { FC } from "react";
import Match from "../../models/Match";
import classNames from "classnames";
import { useClubContext } from "../ClubContext";
import MatchDate from "./components/MatchDate";
import Arena from "./components/Arena";
import Fixture from "./components/Fixture";
import DetailedMatchResult from "./components/DetailedMatchResult";

interface Props {
  match: Match;
}

export const MatchRow: FC<Props> = (props) => {
  const { match } = props;

  const club = useClubContext();
  const isHomeMatch = match.isHomeMatchOfClub(club);

  const containerClassName = classNames("match", {
    home: isHomeMatch,
    away: !isHomeMatch,
    upcoming: match.isUpcoming(),
    played: match.wasPlayed()
  });

  return (
    <tr className={containerClassName}>
      <td className="dateAndArena">
        <span className="date">
          <MatchDate match={match} />
        </span>
        <br />
        {match.arena && (
          <span className="arena">
            <Arena arena={match.arena} />
          </span>
        )}
      </td>
      <td className="fixture">
        <Fixture match={match} />
      </td>
      <td className="result">
        <DetailedMatchResult match={match} />
      </td>
    </tr>
  );
};
