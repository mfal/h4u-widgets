import React, { FC } from "react";
import Match from "../../../models/Match";
import { MatchResult } from "./MatchResult";

interface Props {
  match: Match;
}

export const DetailedMatchResult: FC<Props> = (props) => {
  const { match } = props;
  const result = match.result;

  const emptyResult = !result && (
    <span className="emptyResult">
      <MatchResult />
    </span>
  );

  const resultFirstHalf = result && (
    <span className="half first">
      (
      <MatchResult
        home={result.goalsFirstHalf.home}
        guest={result.goalsFirstHalf.guest}
      />
      )
    </span>
  );

  const resultSecondHalf = result && (
    <>
      {" "}
      <strong className="half second">
        <MatchResult
          home={result.goalsSecondHalf?.home}
          guest={result.goalsSecondHalf?.guest}
        />
      </strong>
    </>
  );

  return (
    <>
      {emptyResult}
      {resultFirstHalf}
      {resultSecondHalf}
    </>
  );
};

export default DetailedMatchResult;
