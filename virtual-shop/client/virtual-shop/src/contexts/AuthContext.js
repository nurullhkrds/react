import {useState,createContext,useEffect} from 'react'
import { fetchLogout, fetchMe } from '../Api';
import { Flex, Spinner } from '@chakra-ui/react';

export const AuthContext=createContext();


export const AuthProvider=({children})=>{
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        (async()=>{
            try{
                const me=await fetchMe();
                setLoggedIn(true)
                setUser(me)
                setLoading(false)
                console.log(me)
            }
            catch(e){
                setLoading(false)

            }
        })()

    },[])

    const login=(data)=>{
        setLoggedIn(true)
        setUser(data.user)
        localStorage.setItem('acces-token',data.accessToken)
        localStorage.setItem('refresh-token',data.refreshToken)


    }

    const logout = async () =>{
        setLoggedIn(false)
        setUser(null)
        await fetchLogout();

        localStorage.removeItem('acces-token')
        localStorage.removeItem('refresh-token')
        

    }

    const values={
        loggedIn,
        user,
        login,
        logout
    }

    if(loading){
        return (
            <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
                <Spinner thickness='4px' speed='0.80s' emptyColor='gray.200' size={"xl"} color='red'  />
            </Flex>
        )
    }



    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

}