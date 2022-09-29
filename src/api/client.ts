import { DateTime } from "luxon";
import * as responseSchemas from "./schemas/responses";
import * as models from "../models";
import * as mappings from "./mappings";
import { mapClubMatches, mapScoreTable } from "./mappings";
import ky from "ky";

const handball4all = ky.create({
  prefixUrl: "https://spo.handball4all.de/service/"
});

export class ApiClient {
  public async getScoreTableEntries(
    classId: number
  ): Promise<models.ScoreTableEntry[]> {
    const response = await handball4all
      .get("if_g_json.php", {
        searchParams: {
          cmd: "ps",
          cl: classId
        }
      })
      .json();

    return mapScoreTable(responseSchemas.tableResponse.parse(response));
  }

  public async getLeagueMatches(
    classId: number
  ): Promise<models.LeagueMatches> {
    const response = await handball4all
      .get("if_g_json.php", {
        searchParams: {
          cmd: "ps",
          ca: 1,
          cl: classId
        }
      })
      .json();

    return mappings.mapLeagueMatches(
      responseSchemas.leagueMatchesResponse.parse(response)
    );
  }

  public async getMatchResults(
    club: number,
    offset = 0
  ): Promise<models.ClubMatches> {
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
