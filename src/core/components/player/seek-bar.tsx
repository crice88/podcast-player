import { useEffect, useMemo, useState } from "react";

interface Props {
  audio: HTMLAudioElement;
  onSeek(time: number): void;
}

export default function SeekBar({ audio, onSeek }: Props) {
  const [time, setTime] = useState(0);

  const handleTimeUpdate = (event: Event) => {
    // @ts-ignore
    setTime(Math.round(event.path[0].currentTime));
  };

  const durationPercentage = useMemo(() => {
    if (audio.duration) {
      return Math.round((time / audio.duration) * 100);
    } else {
      return 0;
    }
  }, [time]);

  const handleSeek = (e: MouseEvent, bounds: any) => {
    const max = bounds.width;
    const pos = e.pageX - bounds.left;
    const dual = pos / max;

    onSeek(Math.round(audio.duration * dual));
  }

  useEffect(() => {
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", () => setTime(audio.duration));

    document.getElementById('progressBar')?.addEventListener('click', function (e) {
      handleSeek(e, this.getBoundingClientRect());
    });

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", () => setTime(0));
      document.removeEventListener('click', () => handleSeek);
    };
  }, [audio]);

  return (
    <div className="h-4 border border-gray-200 rounded-md" id="progressBar">
      <div
        className="h-4 bg-black rounded-md"
        style={{ width: durationPercentage + "%" }}
      />
    </div>
  );
}
