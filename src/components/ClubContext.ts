import { createContext, useContext } from "react";
import Club from "../models/Club";
import invariant from "invariant";

const clubContext = createContext<Club | undefined>(undefined);

export const useClubContext = (): Club => {
  const club = useContext(clubContext);
  invariant(!!club, "Club not set in context");
  return club;
};

export const ClubContext = clubContext.Provider;
