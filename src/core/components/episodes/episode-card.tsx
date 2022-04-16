import { Episode } from "../../types";

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <div className="flex-1 hover:bg-gray-200 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <a href={`/player/episodes/${episode.id}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {episode.name}
            </p>
            <p className="mt-3 text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga culpa,
              similique sequi cum eos quis dolorum.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
