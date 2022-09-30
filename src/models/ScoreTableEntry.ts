import Team from "./Team";

export class ScoreTableEntry {
  public readonly team: Team;
  public readonly score: [number, number];
  public readonly goals: [number, number];
  public readonly position?: number;

  public constructor(
    team: Team,
    score: [number, number],
    goals: [number, number],
    position?: number
  ) {
    this.team = team;
    this.score = score;
    this.goals = goals;
    this.position = position;
  }
}

export default ScoreTableEntry;
