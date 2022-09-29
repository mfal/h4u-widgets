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
            <td>{entry.position}</td>
            <td>
              <TeamName team={entry.team} />
            </td>
            <td>
              {entry.score[0]}:{entry.score[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;
