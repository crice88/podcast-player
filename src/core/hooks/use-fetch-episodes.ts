import { useQuery } from "react-query";

import { Http } from "../utils";
import { EpisodeGateway } from "../gateways";
import { Episode } from "../types";

async function fetchEpisodes() {
  return Http.handleResponse(EpisodeGateway.findMany());
}

export function useFetchEpisodes() {
  return useQuery<Episode[]>("fetchEpisodes", fetchEpisodes);
}
