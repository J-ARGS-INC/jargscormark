import { createContext, useContext, useState } from "react";

export const UserContext = createContext(); // Create context properly

export const UserProvider = ({ children }) => { // Rename to match convention
    let admin = sessionStorage.getItem("admin")
    const [user, setUser] = useState(admin ? admin : "");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

// Custom hook to use the context
export const useUser = () => {
    return useContext(UserContext);
};
