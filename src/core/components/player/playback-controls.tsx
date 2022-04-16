import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  RewindIcon,
} from "@heroicons/react/solid";

interface Props {
  onPlay(): void;
  onPause(): void;
  onRewind(): void;
  onFastForward(): void;
}

export default function PlaybackControls({ ...props }: Props) {
  const { onPlay, onPause, onRewind, onFastForward } = props;

  return (
    <div className="h-8 rounded-sm flex flex-row items-center justify-center gap-4">
      <RewindIcon className="h-8 cursor-pointer" onClick={onRewind} />
      <PlayIcon className="h-8 cursor-pointer" onClick={onPlay} />
      <PauseIcon className="h-8 cursor-pointer" onClick={onPause} />
      <FastForwardIcon className="h-8 cursor-pointer" onClick={onFastForward} />
    </div>
  );
}
