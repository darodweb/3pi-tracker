import React, { useState } from 'react';
import { getFirestore } from '../Firebase/Firebase';

export const CardContext = React.createContext();

export const dbIntegrations = getFirestore().collection("Integrations");


export const CardContextProvider = (props) => {
    const [integration, setIntegration] = useState([]);


    return (
        <CardContext.Provider value={[integration, setIntegration]}>
            {props.children}
        </CardContext.Provider>
    )

}