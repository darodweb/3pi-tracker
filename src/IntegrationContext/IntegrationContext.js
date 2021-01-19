import React, { useState, useEffect } from 'react';
import { getFirestore } from '../Firebase/Firebase';

export const IntegrationContext = React.createContext();
export const dbIntegrations = getFirestore().collection("Integrations");


export const IntegrationContextProvider = (props) => {
    const [integration, setIntegration] = useState([]);
    const [integrationDb, setintegrationDb] = useState([]);
    const [pendingIntegration, setPendingIntegration] = useState([]);

    //Querying Firebase to get all integrations marked: In Progress or In Program

    useEffect(() => {

        //Query all integrations

        dbIntegrations.get().then((querySnapshot) => {
            const aux =
                querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
            console.log('Este es el valor de aux:', aux);
            setintegrationDb([...integrationDb, aux]);
        })
    }, [])

    // useEffect(() => {
    //     //Query integrations "In Progress"
    //     dbIntegrations.where("status", "==", "In Progress").get()
    //         .then((querySnapshot) => {
    //             const inProgress =
    //                 querySnapshot.docs.map((doc) => {
    //                     return { id: doc.id, ...doc.data() };
    //                 })
    //             console.log('Este es el valor de inProgress:', inProgress);
    //             setPendingIntegration([...pendingIntegration, inProgress]);
    //         })

    // }, [])

    // useEffect(() => {
    //     //Query integrations "In Programming"   
    //     dbIntegrations.where("status", "==", "In Program.").get()
    //         .then((querySnapshot) => {
    //             const inProgramming =
    //                 querySnapshot.docs.map((doc) => {
    //                     return { id: doc.id, ...doc.data() };
    //                 })
    //             console.log('Este es el valor de inProgramming:', inProgramming);
    //             setPendingIntegration([...pendingIntegration, inProgramming]);
    //         })

    // }, [])

    console.log('integrationDb', integrationDb)
    console.log('pendingIntegration', pendingIntegration)

    return (
        <IntegrationContext.Provider value={[integrationDb, pendingIntegration, setPendingIntegration]}>
            {props.children}
        </IntegrationContext.Provider>
    )

}