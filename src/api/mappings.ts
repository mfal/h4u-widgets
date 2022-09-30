import * as models from "../models";
import * as schemas from "./schemas/components";
import * as responseSchemas from "./schemas/responses";
import Match from "../models/Match";
import League from "../models/League";
import { DateTime } from "luxon";
import Arena from "../models/Arena";
import Team from "../models/Team";
import MatchResult from "../models/MatchResult";
import Gender from "../models/Gender";
import AgeClass from "../models/AgeClass";
import Address from "../models/Address";
import Goals from "../models/Goals";
import ClubMatches from "../models/ClubMatches";
import Club from "../models/Club";

const mapLeague = (apiLeague: schemas.League): League => {
  const gender = new Gender(apiLeague.gClassGender);

  const ageClass = new AgeClass(apiLeague.gClassAGsDesc);

  return new League(
    apiLeague.gClassID,
    apiLeague.gClassLname,
    gender,
    ageClass
  );
};

const mapArena = (apiMatch: schemas.Match): Arena | undefined =>
  apiMatch.gGymnasiumName
    ? new Arena(
        apiMatch.gGymnasiumName,
        apiMatch.gGymnasiumTown &&
        apiMatch.gGymnasiumStreet &&
        apiMatch.gGymnasiumPostal
          ? new Address(
              apiMatch.gGymnasiumTown,
              apiMatch.gGymnasiumStreet,
              apiMatch.gGymnasiumPostal
            )
          : undefined
      )
    : undefined;

const mapMatchDate = (apiMatch: schemas.Match): DateTime | undefined => {
  const dateTime = DateTime.fromFormat(
    `${apiMatch.gDate} - ${apiMatch.gTime}`,
    "dd.MM.yy - hh:mm"
  );

  const date = DateTime.fromFormat(apiMatch.gDate, "dd.MM.yy");

  return dateTime.isValid ? dateTime : date.isValid ? date : undefined;
};

const mapGoals = (home?: number, guest?: number): Goals | undefined => {
  if (home !== undefined && guest !== undefined) {
    return new Goals(home, guest);
  }
};

const mapMatchResult = (apiMatch: schemas.Match): MatchResult | undefined => {
  const goalsFirstHalf = mapGoals(
    apiMatch.gHomeGoals_1,
    apiMatch.gGuestGoals_1
  );
  const goalsSecondHalf = mapGoals(apiMatch.gHomeGoals, apiMatch.gGuestGoals);

  if (goalsFirstHalf) {
    return new MatchResult(goalsFirstHalf, goalsSecondHalf);
  }
};

const mapMatch = (apiMatch: schemas.Match, league?: models.League): Match => {
  return new Match(
    apiMatch.gID,
    new Team(apiMatch.gHomeTeam, league),
    new Team(apiMatch.gGuestTeam, league),
    mapMatchDate(apiMatch),
    mapArena(apiMatch),
    mapMatchResult(apiMatch)
  );
};

export const mapClubMatches = (
  apiResult: responseSchemas.ClubMatchesResponse
): ClubMatches => {
  const club = new Club(apiResult[0].head.name);

  const matches = apiResult[0].content.classes.reduce<Match[]>(
    (allMatches, apiLeague) => {
      const matchesOfLeague = apiLeague.games.map((apiMatch) =>
        mapMatch(apiMatch, mapLeague(apiLeague))
      );

      allMatches.push(...matchesOfLeague);

      return allMatches;
    },
    []
  );

  return new ClubMatches(club, matches);
};

export const mapLeagueMatches = (
  apiResult: responseSchemas.LeagueMatchesResponse
): models.LeagueMatches => {
  return new models.LeagueMatches(
    apiResult[0].content.actualGames.map((match) => mapMatch(match)),
    apiResult[0].content.futureGames.games.map((match) => mapMatch(match))
  );
};

export const mapScoreTable = (
  apiResult: responseSchemas.ScoreTableResponse
): models.ScoreTableEntry[] => {
  return apiResult[0].content.score.map(
    (score) =>
      new models.ScoreTableEntry(
        new Team(score.tabTeamname),
        [score.pointsPlus, score.pointsMinus],
        [score.numGoalsShot, score.numGoalsGot],
        score.tabScore
      )
  );
};
