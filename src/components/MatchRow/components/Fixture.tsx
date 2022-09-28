import React, { FC } from "react";
import Match from "../../../models/Match";
import Team from "./Team";

interface Props {
  match: Match;
}

export const Fixture: FC<Props> = (props) => {
  const { match } = props;

  return (
    <>
      <Team team={match.homeTeam} /> - <Team team={match.guestTeam} />
    </>
  );
};

export default Fixture;
