import React, { FC } from "react";
import Match from "../../models/Match";
import classNames from "classnames";
import { useClubContext } from "../ClubContext";
import MatchDate from "./components/MatchDate";
import Arena from "./components/Arena";
import Fixture from "./components/Fixture";
import Result from "./components/Result";

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
    <article className={containerClassName}>
      <ul>
        <li className="date-arena">
          <MatchDate match={match} />
          <br />
          <Arena match={match} />
        </li>
        <Fixture match={match} />
        <Result match={match} />
      </ul>
    </article>
  );
};
