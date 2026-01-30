import axios from 'axios'
export const apiClient=axios.create({
    //mysql
    //baseURL:"http://127.0.0.1:8000"
     baseURL:"http://192.168.1.107:8000"
})

export const apiClientNew=axios.create({
    baseURL:"http://192.168.1.107:8000"
})

//OK