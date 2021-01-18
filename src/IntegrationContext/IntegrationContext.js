import React, { useState, useEffect } from 'react';
import { getFirestore } from '../Firebase/Firebase';

export const IntegrationContext = React.createContext();
export const dbIntegrations = getFirestore().collection("Integrations");


export const IntegrationContextProvider = (props) => {
    const [integration, setIntegration] = useState([]);
    const [integrationDb, setintegrationDb] = useState([]);
    const [pendingIntegration, setPendingIntegration] = useState({});

    //Querying Firebase to get all integrations marked: In Progress or In Program

    console.log(integration);

    useEffect(() => {

        //Query all integrations
        dbIntegrations.get().then((querySnapshot) => {
            const aux =
                querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
            setintegrationDb(aux);
        })


        //Query integrations "In Progress"
        dbIntegrations.where("status", "==", "In Progress").get()
            .then((querySnapshot) => {
                const inProgress =
                    querySnapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })

                setPendingIntegration(inProgress);
            })

        //Query integrations "In Programming"   
        dbIntegrations.where("status", "==", "In Program.").get()
            .then((querySnapshot) => {
                const inProgramming =
                    querySnapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                console.log(`This integration is in programming: ${inProgramming}`);
                setPendingIntegration(inProgramming);
            })

    }, [])






    //Query to get integrations "In Programming"
    // useEffect(() => {

    //     dbIntegrations.where("status", "==", "Completed").get()
    //         .then((querySnapshot) => {
    //             const inProgramming =
    //                 querySnapshot.docs.map((doc) => {
    //                     return { id: doc.id, ...doc.data() };
    //                 })
    //             console.log(`This integration is in programming: ${inProgramming}`);
    //             setIntegration(inProgramming);
    //         })
    // }, [])


    return (
        <IntegrationContext.Provider value={[integration, setIntegration, pendingIntegration]}>
            {props.children}
        </IntegrationContext.Provider>
    )

}