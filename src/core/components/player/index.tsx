import { useEffect, useMemo, useState } from "react";

import { Episode } from "../../types";
import MarkerWindow from "./marker-window";
import PlaybackControls from "./playback-controls";
import SeekBar from "./seek-bar";

interface Props {
  episode: Episode;
}

export default function PodcastPlayer({ episode }: Props) {
  const [playing, setPlaying] = useState(false);

  const { markers } = episode;

  const audio = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_BASE_URL + episode.audio;
    return new Audio(url);
  }, [episode]);

  const handlePlay = async () => {
    setPlaying(true);
    await audio.play();
  };

  const handlePause = () => {
    setPlaying(false);
    audio.pause();
  };

  const handleRewind = async () => {
    const time = audio.currentTime - 5;
    if (time > 0) {
      audio.currentTime = time;
    } else {
      audio.currentTime = 0;
    }
  };

  const handleFastForward = async () => {
    const time = audio.currentTime + 5;
    if (time > audio.duration) {
      audio.currentTime = audio.duration;
    } else {
      audio.currentTime = time;
    }
  };

  const handleSeek = (time: number) => {
    audio.currentTime = time;
  };

  useEffect(() => {
    audio.addEventListener("ended", async () => {
      setPlaying(false);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("ended", () => {
        return;
      });
    };
  }, [episode]);

  return (
    <div className="px-6 space-y-12">
      <h2 className="text-3xl font-extrabold text-gray-900">Now playing { episode.name }</h2>
      <div className="flex flex-row justify-center items-center">
        <div className="w-[650px] border-2 border-gray-200 rounded-sm p-4">
          <div className="flex flex-col justify-center gap-4 w-full">
            {playing && (
              <MarkerWindow
                markers={markers}
                audio={audio}
                isPlaying={playing}
              />
            )}
            <SeekBar audio={audio} onSeek={handleSeek} />
            <PlaybackControls
              onPlay={handlePlay}
              onPause={handlePause}
              onRewind={handleRewind}
              onFastForward={handleFastForward}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
