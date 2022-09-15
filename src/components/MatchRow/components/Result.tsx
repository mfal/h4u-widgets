import React, { FC } from "react";
import Match from "../../../models/Match";
import GoalsModel from "../../../models/Goals";

interface GoalsProps {
  goals: GoalsModel;
}
const Goals: FC<GoalsProps> = (props) => {
  const { goals } = props;

  return (
    <>
      {goals.home}:{goals.away}
    </>
  );
};

interface Props {
  match: Match;
}

export const Result: FC<Props> = (props) => {
  const { match } = props;

  if (!match.result) {
    return null;
  }

  const resultFirstHalf = (
    <>
      (<Goals goals={match.result.goalsFirstHalf} />)
    </>
  );
  const resultSecondHal = match.result.goalsSecondHalf ? (
    <strong>
      <Goals goals={match.result.goalsSecondHalf} />
    </strong>
  ) : null;

  return (
    <li className="result">
      {resultFirstHalf} {resultSecondHal}
    </li>
  );
};

export default Result;
