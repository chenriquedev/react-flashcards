import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://flashcards-backend-chenrique.glitch.me",
  timeout: 5000,
});

export async function get(url) {
  const dados = await axiosInstance.get(url);
  return dados;
}

export async function onDelete(url) {
  const data = await axiosInstance.delete(url);
}

export async function create(url, object) {
  const data = axiosInstance.post(url, object);
  return data;
}
export async function edit(url, object) {
  const data = axiosInstance.put(url, object);
  return data;
}
