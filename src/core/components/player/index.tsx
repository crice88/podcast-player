import { useEffect, useMemo } from "react";

import { Episode } from "../../types";
import MarkerWindow from "./marker-window";
import PlaybackControls from "./playback-controls";
import SeekBar from "./seek-bar";

interface Props {
  episode: Episode;
}

export default function PodcastPlayer({ episode }: Props) {
  const audio = useMemo(() => {
    return new Audio(`http://localhost:1337${episode.audio}`);
  }, [episode]);

  const handlePlay = async () => {
    await audio.play();
  };

  const handlePause = async () => {
    await audio.pause();
  };

  const handleStop = async () => {
    await handlePause();
    audio.currentTime = 0;
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
      await handleStop();
    } else {
      audio.currentTime = time;
    }
  };

  useEffect(() => {
    return () => {
      handleStop();
    };
  }, [episode]);

  return (
    <div className="px-6 space-y-12">
      <h2 className="text-3xl font-extrabold text-gray-900">Now playing</h2>
      <div className="flex flex-row justify-center items-center">
        <div className="w-[650px] border-2 border-gray-200 rounded-sm p-4">
          <div className="flex flex-col justify-center gap-4">
            <MarkerWindow episode={episode} />
            <SeekBar audio={audio} />
            <PlaybackControls
              onPlay={handlePlay}
              onPause={handlePause}
              onStop={handleStop}
              onRewind={handleRewind}
              onFastForward={handleFastForward}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
