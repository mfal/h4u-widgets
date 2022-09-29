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
    return <strong className="team">{textContent}</strong>;
  }

  return <span className="team">{textContent}</span>;
};

export default TeamName;
