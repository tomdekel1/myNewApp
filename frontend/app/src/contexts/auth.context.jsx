import { createContext, useContext, useState } from "react";
import userService from "../services/usersServices";

const fn_err_context_must_be_used = () => {
    throw new Error("must use authcontext provider for consumer to work")
}

export const authContext = createContext({
    user: null,
    login: fn_err_context_must_be_used,
    logOut: fn_err_context_must_be_used
})

export function useAuth() {
    return useContext(authContext)
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(userService.getUser())

    const refreshUser = () => setUser(userService.getUser())

    const login = async (loginDetails) => {
        const response = await userService.loginUser(loginDetails);
        refreshUser();

        return response
    }

    const logOut = () => {
        userService.logOut()
        refreshUser()
    }

    const getUserDetails = async (userId) => {
        const response = await userService.getUserDetails(userId);
        return response
    }

    return (
        <authContext.Provider value={{ user, login, logOut, getUserDetails }}>
            {children}
        </authContext.Provider>
    )

}