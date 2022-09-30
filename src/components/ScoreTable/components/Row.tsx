import React, { FC } from "react";
import { ScoreTableEntry } from "../../../models";
import TeamName from "../../TeamName";

interface Props {
  entry: ScoreTableEntry;
}

export const ScoreTable: FC<Props> = (props) => {
  const { entry } = props;
  return (
    <tr>
      <td className="position">{entry.position}</td>
      <td className="team">
        <TeamName team={entry.team} />
      </td>
      <td className="score">
        {entry.score[0]}:{entry.score[1]}
      </td>
      <td className="goals">
        {entry.goals[0]}:{entry.goals[1]}
      </td>
    </tr>
  );
};

export default ScoreTable;
