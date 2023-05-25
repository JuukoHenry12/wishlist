import {axiosInstance } from "./axiosInstance"

// register user
export const RegisterUser =async(payload)=>{
    try {
       const response = await axiosInstance.post('/api/user/waitlist', payload)
       return response.data
    }catch(error){
        return error.message
    }
}

export const GetCurrentUser =async(payload)=>{
    try {
        const response = await axiosInstance.get('/api/user/currentUser', payload)
        return response.data
    }catch(error){
        return error.message
    }
}


// //login user
// export const LoginUser =async(payload)=>{
//     try {
//        const response = await axiosInstance.post('/api/user/login', payload)
//        return response.data
//     }catch(error){
//         return error.message
//     }
// }