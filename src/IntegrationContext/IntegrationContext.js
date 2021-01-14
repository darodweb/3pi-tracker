import React, { useState } from 'react';
import { getFirestore } from '../Firebase/Firebase';

export const IntegrationContext = React.createContext();
export const dbIntegrations = getFirestore().collection("Integrations");


export const IntegrationContextProvider = (props) => {
    const [integration, setIntegration] = useState([]);

    //Query Firebase with filter per status: Completed, In Progr., etc. and store in independent states. 

    return (
        <IntegrationContext.Provider value={[integration, setIntegration]}>
            {props.children}
        </IntegrationContext.Provider>
    )

}