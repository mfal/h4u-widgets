import League from "./League";
import Club from "./Club";

export class Team {
  public readonly name: string;
  public readonly league?: League;

  public constructor(name: string, league?: League) {
    this.name = name;
    this.league = league;
  }

  public isOfClub(club: Club): boolean {
    return this.name.startsWith(club.name);
  }

  public getClubRelativeName(club: Club): string {
    if (!this.isOfClub(club) || !this.league) {
      return this.name;
    }

    const index = this.name.slice(club.name.length).trim();

    return `${this.league.getClassName()} ${index}`.trim();
  }
}

export default Team;
