import { useQuery } from "react-query";

import { handleResponse } from "../utils/http";
import { EpisodeGateway } from "../gateways";
import { Episode } from "../types";

async function fetchEpisode(id?: string | string[]) {
  if (id) {
    return handleResponse(EpisodeGateway.findOne(id as string));
  }
}

export function useFetchEpisode(id?: string | string[]) {
  return useQuery<Episode>(["fetchEpisode", (id as string) ?? ""], () =>
    fetchEpisode(id)
  );
}
