import React, { FC } from "react";
import TeamModel from "../../../models/Team";
import { useClubContext } from "../../ClubContext";

interface Props {
  team: TeamModel;
}

export const Team: FC<Props> = (props) => {
  const { team } = props;
  const club = useClubContext();
  const textContext = team.getClubRelativeName(club);

  if (team.isOfClub(club)) {
    return <strong>{textContext}</strong>;
  }
  return <>{textContext}</>;
};

export default Team;
