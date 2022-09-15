import { Team } from "./Team";
import { MatchResult } from "./MatchResult";
import League from "./League";
import { DateTime } from "luxon";
import Arena from "./Arena";
import Club from "./Club";

export class Match {
  public readonly id: string;
  public readonly homeTeam: Team;
  public readonly guestTeam: Team;
  public readonly league: League;
  public readonly date: DateTime;
  public readonly arena: Arena;
  public readonly result?: MatchResult;

  public constructor(
    id: string,
    homeTeam: Team,
    guestTeam: Team,
    league: League,
    date: DateTime,
    arena: Arena,
    result?: MatchResult
  ) {
    this.id = id;
    this.homeTeam = homeTeam;
    this.guestTeam = guestTeam;
    this.league = league;
    this.arena = arena;
    this.date = date;
    this.result = result;
  }

  public isHomeMatchOfClub(club: Club): boolean {
    return this.homeTeam.isOfClub(club);
  }
}

export default Match;
