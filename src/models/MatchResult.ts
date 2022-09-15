import Goals from "./Goals";

export class MatchResult {
  public goalsFirstHalf: Goals;
  public goalsSecondHalf?: Goals;

  public constructor(goalsFirstHalf: Goals, goalsSecondHalf?: Goals) {
    this.goalsFirstHalf = goalsFirstHalf;
    this.goalsSecondHalf = goalsSecondHalf;
  }
}

export default MatchResult;
