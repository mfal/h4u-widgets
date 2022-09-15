import { DateTime } from "luxon";
import * as responseSchemas from "./schemas/responses";
import * as schemas from "./schemas/components";
import { TableEntry } from "./schemas/components";
import { mapClubMatches } from "./mappings";
import ClubMatches from "../models/ClubMatches";
import ky from "ky";

const handball4all = ky.create({
  prefixUrl: "https://spo.handball4all.de/service/"
});

export class ApiClient {
  public async getTable(classId: number): Promise<TableEntry[]> {
    const response = await handball4all
      .get("if_g_json.php", {
        searchParams: {
          cmd: "ps",
          cl: classId
        }
      })
      .json();

    return responseSchemas.tableResponse.parse(response)[0].content.score;
  }

  public async getLeagueMatches(classId: number): Promise<schemas.Match[]> {
    const response = await handball4all
      .get("if_g_json.php", {
        searchParams: {
          cmd: "ps",
          ca: 1,
          cl: classId
        }
      })
      .json();

    return responseSchemas.leagueMatchesResponse.parse(response)[0].content
      .futureGames.games;
  }

  public async getMatchResults(
    club: number,
    offset = 0
  ): Promise<ClubMatches> {
    const startOfWeek = DateTime.local()
      .startOf("week")
      .plus({ week: offset })
      .toFormat("yyyy-LL-dd");

    const response = await handball4all
      .get("if_g_json.php", {
        searchParams: {
          c: club,
          cmd: "pcu",
          do: startOfWeek
        }
      })
      .json();

    const matchesResponse = responseSchemas.clubMatchesResponse.parse(response);

    return mapClubMatches(matchesResponse);
  }
}

export const apiClient = new ApiClient();
