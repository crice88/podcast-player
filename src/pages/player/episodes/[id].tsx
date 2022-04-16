import { useRouter } from "next/router";

import { useFetchEpisode } from "../../../core/hooks/use-fetch-episode";

export default function Episode() {
  const {
    query: { id },
  } = useRouter();
  const { isSuccess, isLoading, data } = useFetchEpisode(String(id));

  const handlePlay = () => {
    const audio = new Audio(`http://localhost:1337${data?.audio}`);
    audio.play();
  };

  if (isSuccess && data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <br />
        <button onClick={handlePlay}>Click Me!!</button>
      </div>
    );
  } else if (isLoading) {
    // skeleton
    return null;
  } else {
    return null;
  }
}
