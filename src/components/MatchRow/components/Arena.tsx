import React, { FC } from "react";
import * as models from "../../../models";

interface Props {
  arena: models.Arena;
}

export const Arena: FC<Props> = (props) => {
  const { arena } = props;

  return <>{arena.name}</>;
};

export default Arena;
