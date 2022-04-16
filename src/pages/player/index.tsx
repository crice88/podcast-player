import { useFetchEpisodes } from "../../core/hooks";

export default function PodcastPlayer() {
  const { isLoading, isSuccess, data } = useFetchEpisodes();

  if (isSuccess && data) {
    return (
      <div className="p-8">
        <a href={`/player/episodes/${data[0].id}`}>{data[0].name}</a>
      </div>
    );
  } else if (isLoading) {
    // show skeleton
    return null;
  } else {
    return null;
  }
}
