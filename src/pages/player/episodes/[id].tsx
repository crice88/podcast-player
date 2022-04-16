import { useRouter } from "next/router";

import { useFetchEpisode } from "../../../core/hooks/use-fetch-episode";
import PodcastPlayer from "../../../core/components/player";

export default function Episode() {
  const {
    query: { id },
  } = useRouter();
  const { isSuccess, isLoading, data } = useFetchEpisode(id);

  if (isSuccess && data) {
    return <PodcastPlayer episode={data} />;
  } else if (isLoading) {
    // skeleton
    return null;
  } else {
    return null;
  }
}
