import { Team } from "../models";
import React, { FC } from "react";
import { useClubContext } from "./ClubContext";

interface Props {
  team: Team;
}
export const TeamName: FC<Props> = (props) => {
  const { team } = props;
  const club = useClubContext();
  const isClubTeam = team.isOfClub(club);

  const textContent = team.getClubRelativeName(club);
  if (isClubTeam) {
    return <strong>{textContent}</strong>;
  }
  return <>{textContent}</>;
};

export default TeamName;
