import {API_KEY, api} from '@api';
import {useEffect, useState} from 'react';

const urlVideo = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`;

export const fetchVideos = async () => {
  const videos = await api(urlVideo);
  return videos;
};

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reFetchVideos, setReFetchVideos] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getVideos = async () => {
      try {
        const videosFetched = await fetchVideos();
        setVideos(videosFetched.items);
        setIsLoading(false);
        setError('');
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getVideos();
  }, [reFetchVideos]);

  return [
    [...videos, ...videos, ...videos, ...videos],
    isLoading,
    error,
    setReFetchVideos,
  ];
};
