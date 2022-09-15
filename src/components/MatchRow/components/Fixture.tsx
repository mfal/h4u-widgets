import React, { FC } from "react";
import Match from "../../../models/Match";
import TeamModel from "../../../models/Team";
import { useClubContext } from "../../ClubContext";

interface TeamProps {
  team: TeamModel;
}

const Team: FC<TeamProps> = (props) => {
  const { team } = props;
  const club = useClubContext();
  const textContext = team.getClubRelativeName(club);

  if (team.isOfClub(club)) {
    return <strong>{textContext}</strong>;
  }
  return <span>{textContext}</span>;
};

interface Props {
  match: Match;
}

export const Fixture: FC<Props> = (props) => {
  const { match } = props;

  return (
    <li className="fixture">
      <Team team={match.homeTeam} /> - <Team team={match.guestTeam} />
    </li>
  );
};

export default Fixture;
