import React, { FC } from "react";

interface Props {
  home?: number;
  guest?: number;
}

const emptyGoals = "--";

export const MatchResult: FC<Props> = (props) => {
  const { home = emptyGoals, guest = emptyGoals } = props;

  return (
    <>
      {home}:{guest}
    </>
  );
};

export default MatchResult;
