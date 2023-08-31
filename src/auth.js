import { createContext, useContext, useState } from "react";
const AuthContext=createContext(null);
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(false);
    const ismaketrue=(val)=>{
        setUser(val)
    }
    
    return (
        <AuthContext.Provider value={{user,ismaketrue}}>
          {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    return useContext(AuthContext);
}