import React, { FC } from "react";
import TeamModel from "../../../models/Team";

interface Props {
  team: TeamModel;
}

export const Team: FC<Props> = (props) => {
  const { team } = props;

  return <div className="arena">{team.name}</div>;
};

export default Team;
