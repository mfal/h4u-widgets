import React, { FC } from "react";
import Match from "../../../models/Match";

interface Props {
  match: Match;
}

export const Arena: FC<Props> = (props) => {
  const { match } = props;

  return <>{match.arena.name}</>;
};

export default Arena;
