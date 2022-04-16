import { Episode } from "../../types";

interface Props {
  episode: Episode;
}

export default function MarkerWindow({ episode }: Props) {
  return <div className="h-[300px] border-2 border-gray-200 rounded-sm"></div>;
}
