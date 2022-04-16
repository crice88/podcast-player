import { useFetchEpisodes } from "../../core/hooks";
import EpisodeCard from "../../core/components/episodes/episode-card";

export default function PodcastPlayer() {
  const { isLoading, isSuccess, data } = useFetchEpisodes();

  if (isSuccess && data) {
    return (
      <div className="mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Listen now</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Up next
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mt-12 max-w-lg mx-auto gap-5">
          {data.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    );
  } else if (isLoading) {
    return null;
  } else {
    return null;
  }
}
