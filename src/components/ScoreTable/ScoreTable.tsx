import ScoreTableEntry from "../../models/ScoreTableEntry";
import React, { FC } from "react";
import Row from "./components/Row";

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
        <th>Tore</th>
      </thead>
      <tbody>
        {props.entries.map((entry, index) => (
          <Row key={index} entry={entry} />
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;
