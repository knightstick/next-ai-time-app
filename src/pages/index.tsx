import { useEffect, useState } from "react";

const Home = () => {
  const [creativeTime, setCreativeTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchCreativeTime = async () => {
      try {
        const response = await fetch('/api/fetch-time');
        const data = await response.json();

        setCreativeTime(data.time)
      } catch (error) {
        console.error('Error fetching creative time:', JSON.stringify(error));
      }
    };

    fetchCreativeTime();
  }, []);

  return (
    <div>
      {creativeTime ? <p>{creativeTime}</p> : <p>Asking the AI Oracle...</p>}
    </div>
  )
}

export default Home
