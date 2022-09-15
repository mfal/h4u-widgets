import Club from "./Club";
import Match from "./Match";

export class ClubMatches {
  public readonly club: Club;
  public readonly matches: Match[];

  public constructor(club: Club, matches: Match[]) {
    this.club = club;
    this.matches = matches;
  }

  public getHomeMatches(): Match[] {
    return this.matches.filter((m) => m.homeTeam.isOfClub(this.club));
  }

  public getAwayMatches(): Match[] {
    return this.matches.filter((m) => m.guestTeam.isOfClub(this.club));
  }
}

export default ClubMatches;
