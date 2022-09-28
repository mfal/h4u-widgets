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

  const containerClassName = classNames("matchcontainer", {
    home: isHomeMatch,
    away: !isHomeMatch
  });

  return (
    <tr className={containerClassName}>
      <td className="date-arena">
        <span className="date">
          <MatchDate match={match} />
        </span>
        <br />
        <span className="arena">
          <Arena match={match} />
        </span>
      </td>
      <td>
        <Fixture match={match} />
      </td>
      <td>
        <DetailedMatchResult match={match} />
      </td>
    </tr>
  );
};
