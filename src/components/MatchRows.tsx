import React, { FC } from "react";
import { MatchRow } from "./MatchRow/MatchRow";
import Match from "../models/Match";

interface Props {
  matches: Match[];
}

export const MatchRows: FC<Props> = (props) => {
  const { matches } = props;

  const rows = matches.map((match, index) => (
    <MatchRow key={match.id} match={match} />
  ));

  return <>{rows}</>;
};

export default MatchRows;