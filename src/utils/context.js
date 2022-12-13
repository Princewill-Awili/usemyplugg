import { useState,createContext } from "react";


export const states = createContext();

export const StateContextProvider = ({children}) => {
     const [pickedArtisan, setPickedArtisan] = useState(null);
     return (
          <states.Provider value={{pickedArtisan, setPickedArtisan}}>
               {children}
          </states.Provider>
     )
}