import React, { FC } from "react";
import Match from "../../../models/Match";
import TeamName from "../../TeamName";

interface Props {
  match: Match;
}

export const Fixture: FC<Props> = (props) => {
  const { match } = props;

  return (
    <>
      <TeamName team={match.homeTeam} /> - <TeamName team={match.guestTeam} />
    </>
  );
};

export default Fixture;
