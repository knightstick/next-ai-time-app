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
    <div className="bg-yellow-300 min-h-screen flex items-center justify-center">
      <div className="bg-yellow-500 text-white p-10 rounded-lg shadow-xl">
        {creativeTime ? (
          <p className="text-2xl font-light">{creativeTime}</p>
        ) : (
          <p className="text-2xl font-light">Asking the AI Oracle...</p>
        )}
      </div>
    </div>
  )
}

export default Home
