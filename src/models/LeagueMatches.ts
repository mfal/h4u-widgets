import Match from "./Match";
import Club from "./Club";

export class LeagueMatches {
  public readonly actualMatches: Match[];
  public readonly futureMatches: Match[];

  public constructor(actualMatches: Match[], futureMatches: Match[]) {
    this.actualMatches = actualMatches;
    this.futureMatches = futureMatches;
  }

  private static readonly matchIsOfClub = (club: Club) => (match: Match) =>
    match.homeTeam.isOfClub(club) || match.guestTeam.isOfClub(club);

  public futureMatchesOfClub(club: Club): Match[] {
    return this.futureMatches.filter(LeagueMatches.matchIsOfClub(club));
  }

  public actualMatchesOfClub(club: Club): Match[] {
    return this.actualMatches.filter(LeagueMatches.matchIsOfClub(club));
  }
}

export default LeagueMatches;
