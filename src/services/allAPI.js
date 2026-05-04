import axios from "axios";

const serverURL = "http://localhost:3000"

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