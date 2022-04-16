import { useEffect, useMemo, useState } from "react";

interface Props {
  audio: HTMLAudioElement;
}

export default function SeekBar({ audio }: Props) {
  const [time, setTime] = useState(0);

  const handleTimeUpdate = (event: Event) => {
    // @ts-ignore
    setTime(Math.floor(event.path[0].currentTime));
  };

  const durationPercentage = useMemo(() => {
    if (audio.duration) {
      return Math.ceil((time / audio.duration) * 100);
    } else {
      return 0;
    }
  }, [time]);

  useEffect(() => {
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", () => setTime(audio.duration));
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", () => setTime(0));
    };
  }, [audio]);

  return (
    <div className="h-4 border border-gray-200 rounded-md">
      <div
        className="h-4 bg-black rounded-md"
        style={{ width: durationPercentage + "%" }}
      />
    </div>
  );
}
