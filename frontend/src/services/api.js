import axios from "axios";

const API = "http://localhost:5000/api/users";

export const getUsers = async () => {
  const res = await axios.get(API);
  return res.data;
};