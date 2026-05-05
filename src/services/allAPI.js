import axios from "axios";

const serverURL = "https://ems-server-68ys.onrender.com"

export const getAllUsersAPI = async ()=>{
    return await axios.get(`${serverURL}/users`)
}
//all user
export const addUsersAPI = async (userData)=>{
    return await axios.post(`${serverURL}/add`,userData)
}
//edit
export const editUsersAPI = async (userID,userData)=>{
    return await axios.put(`${serverURL}/users/${userID}`,userData)
}
//delete
export const deleteUsersAPI = async (userID)=>{
    return await axios.delete(`${serverURL}/users/${userID}`)
}

export const viewUsersAPI = async (id)=>{
    return await axios.get(`${serverURL}/users/${id}`)
}
