import { useQuery } from "react-query";

import { handleResponse } from "../utils/http";
import { EpisodeGateway } from "../gateways";
import { Episode } from "../types";

async function fetchEpisode(id?: string) {
  if (id) {
    return handleResponse(EpisodeGateway.findOne(id));
  }
}

export function useFetchEpisode(id?: string) {
  return useQuery<Episode>(["fetchEpisode", id ?? ""], () => fetchEpisode(id));
}
