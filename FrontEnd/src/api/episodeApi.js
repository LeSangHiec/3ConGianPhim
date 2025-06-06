import axios from './axiosClient';

const episodeApi = {
  getEpisodesByMovieId: (movieId) => {
    return axios.get(`/movies/${movieId}/episodes`);
  },
  getEpisodeById: (id) => {
    return axios.get(`/episodes/${id}`);
  },
  getEpisodeByMovieAndEpisodeId: (movieId, episodeId) => {
    return axios.get(`/movies/${movieId}/episodes/${episodeId}`);
  },
  // API mới: Ghi nhận lượt xem khi bắt đầu xem tập phim
  watchEpisode: (movieId, episodeId) => {
    return axios.post(`/movies/${movieId}/episodes/${episodeId}/watch`);
  },
  createEpisode: (movieId, episodeData, token) => {
    return axios.post(
      `/movies/${movieId}/episodes`,
      episodeData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  updateEpisode: (id, episodeData, token) => {
    return axios.put(
      `/episodes/${id}`,
      episodeData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  deleteEpisode: (id, token) => {
    return axios.delete(
      `/episodes/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};

export default episodeApi;