import { useEffect, useState } from "react";

import { Marker } from "../../types";

interface Props {
  markers: Marker[];
  audio: HTMLAudioElement;
  isPlaying: boolean;
}

export default function MarkerWindow({ markers, audio, isPlaying }: Props) {
  const [marker, setMarker] = useState<Marker>();

  let interval: NodeJS.Timeout;

  const startTimeToDurationMap = markers.reduce(
    (acc: Record<number, Marker>, marker) => {
      acc[marker.start] = marker;
      return acc;
    },
    {}
  );

  const handleTimeUpdate = (currentTime: number) => {
    const currentMarker = startTimeToDurationMap[currentTime];

    if (currentMarker && !audio.paused) {
      setMarker(currentMarker);
      audio.pause();
      setTimeout(async () => {
        await audio.play();
        setMarker(undefined);
      }, currentMarker.duration * 1000);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      handleTimeUpdate(Math.round(audio.currentTime));

      if (audio.currentTime !== audio.duration) {
        interval = setInterval(() => {
          handleTimeUpdate(Math.ceil(audio.currentTime));
        }, 950);
      }
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  if (marker) {
    return (
      <div className="h-[300px] border-2 border-gray-200 rounded-sm">
        {marker.content}
      </div>
    );
  }
  return null;
}
