import Api from "@/libs/axios";
import { authVaribelsType } from "@/types";
import { useState } from "react"; 
import toast from "react-hot-toast";
import useAuthToken from "./tockenExist";

const useAuth = () => {
    const login = async ({username , password}:authVaribelsType) => {
        const {saveToken , token} = useAuthToken()
        try {
            const {data} = await Api.post('/login' , {
                username ,
                password
            })
            if(data) {
                toast.success(data.msg)
            }
            if(data.token) {
                saveToken(data.token)
                if(token) {
                    location.replace('/')
                }
            }
        } catch (error) {
           toast.error('error') 
        }
    }

    return {login}
}

export default useAuth ;
