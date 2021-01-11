import React, { useState } from 'react';
import { getFirestore } from '../Firebase/Firebase';

export const IntegrationContext = React.createContext();
export const dbIntegrations = getFirestore().collection("Integrations");


export const IntegrationContextProvider = (props) => {
    const [integration, setIntegration] = useState([]);



    return (
        <IntegrationContext.Provider value={[integration, setIntegration]}>
            {props.children}
        </IntegrationContext.Provider>
    )

}