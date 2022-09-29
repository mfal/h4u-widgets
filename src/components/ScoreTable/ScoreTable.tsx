import ScoreTableEntry from "../../models/ScoreTableEntry";
import React, { FC } from "react";
import TeamName from "../TeamName";

interface Props {
  entries: ScoreTableEntry[];
}

export const ScoreTable: FC<Props> = (props) => {
  return (
    <table>
      <thead>
        <th>#</th>
        <th>Team</th>
        <th>Punkte</th>
      </thead>
      <tbody>
        {props.entries.map((entry, index) => (
          <tr key={index}>
            <td className="position">{entry.position}</td>
            <td className="team">
              <TeamName team={entry.team} />
            </td>
            <td className="score">
              {entry.score[0]}:{entry.score[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;
