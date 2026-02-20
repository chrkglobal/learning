import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const getUsers = () => axios.get(API);
export const addUser = (data) => axios.post(API, data);
export const updateUser = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);
