import React, { useState, useEffect } from 'react';
import { getFirestore } from '../Firebase/Firebase';

export const IntegrationContext = React.createContext();
export const dbIntegrations = getFirestore().collection("Integrations");


export const IntegrationContextProvider = (props) => {
    const [integration, setIntegration] = useState([]);

    //Querying Firebase to get all integrations marked: Completed

    useEffect(() => {

        dbIntegrations.get().then((querySnapshot) => {
            const aux =
                querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
            setIntegration(aux);
        })
    }, [])



    return (
        <IntegrationContext.Provider value={[integration, setIntegration]}>
            {props.children}
        </IntegrationContext.Provider>
    )

}