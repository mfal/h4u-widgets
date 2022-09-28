import React, { FC } from "react";
import Match from "../../../models/Match";
import { MatchResult } from "./MatchResult";

interface Props {
  match: Match;
}

export const DetailedMatchResult: FC<Props> = (props) => {
  const { match } = props;
  const result = match.result;

  const emptyResult = !result && <MatchResult />;

  const resultFirstHalf = result && (
    <>
      (
      <MatchResult
        home={result.goalsFirstHalf.home}
        guest={result.goalsFirstHalf.away}
      />
      )
    </>
  );

  const resultSecondHalf = result && (
    <>
      &nbsp;
      <strong>
        <MatchResult
          home={result.goalsSecondHalf?.home}
          guest={result.goalsSecondHalf?.away}
        />
      </strong>
    </>
  );

  return (
    <li className="result">
      {emptyResult}
      {resultFirstHalf}
      {resultSecondHalf}
    </li>
  );
};

export default DetailedMatchResult;
