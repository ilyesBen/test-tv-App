import {API_KEY, api} from '@api';
import {useEffect, useState} from 'react';

const urlVideo = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`;

export const fetchVideos = async () => {
  const videos = await api(urlVideo);
  return videos;
};

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const videosFetched = await fetchVideos(urlVideo);
      setVideos(videosFetched.items);
    };
    getVideos();
  }, []);

  return [...videos, ...videos, ...videos, ...videos];
};
