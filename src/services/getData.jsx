import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: { "Accept-Version": "v1" },
});

export const getData = async (query, page = 1) => {
  if (!query) {
    return;
  }

  const searchParams = new URLSearchParams({
    per_page: 12,
    client_id: "RIJ9LVBIMRvnJqwYvVXA15TOW8yXa2jAEDw7kk7Asog",
    query,
    page,
    orientation: "landscape",
  });

  return instance.get(`/search/photos?${searchParams.toString()}`);
};
