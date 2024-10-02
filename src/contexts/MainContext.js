import React, { useContext, useState } from "react"

const MainContext=React.createContext()

export const ContextProvider=({children})=>{
    // state management for active menu
    const [activeMenu, setActiveMenu] = useState(true)

    // state management for account
    const [hasAccount, setHasAccount] = useState(true)

    const [login, setLogin] = useState(false)
    const [signUp, setSignUp] = useState(false)
    return (
        <MainContext.Provider value={{
             activeMenu,
             setActiveMenu,
             hasAccount,
             setHasAccount,
             login,
             setLogin,
             signUp,
             setSignUp,
             // add other state management here if needed  as per your requirement  for example, add a state for current user, add a state for messages, add a state for chat room etc.  for example, user: {name: '', id: ''}  messages: [], chatRoom: '' etc.  as per your requirement.
            
        }}>
            {children}
        </MainContext.Provider>
    )
    
}
export const useMainContext=()=>useContext(MainContext)