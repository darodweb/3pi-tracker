import Integration from '../Integration/Integration';
import { useState, useEffect } from 'react';
import IntegrationsPending from '../IntegrationPending/IntegrationsPending';

const IntegrationList = ({ integrationDb, pendingIntegration, deleteIntegration }) => {
    const [pendingIntegrations, setpendingIntegrations] = useState([]);
    // let flattenedIntegrationDb = integrationDb.flat();

    useEffect(() => {

        if (integrationDb.length > 0) {
            let integrationsInProgress = integrationDb.flat().filter((el) => (el.status !== 'Completed'.trim()));
            setpendingIntegrations(integrationsInProgress);
            return;
        }

    }, [integrationDb])

    console.log(pendingIntegrations);

    return (

        <>

            <div style={{ display: 'flex', justifyContent: 'spaceEvenly', flexDirection: 'row' }}>

                <div class='integration-container'>
                    {pendingIntegrations ? pendingIntegrations.map((pendingInteg) => (
                        <IntegrationsPending
                            integrationDb={integrationDb}
                            pendingInteg={pendingInteg}
                            deleteIntegration={deleteIntegration} />

                    ))
                        :
                        null}

                    {/* <Integration 
                    integrationDb={integrationDb}
                    deleteIntegration={deleteIntegration}
                     style={{ padding: '2rem' }} /> */}
                </div>
            </div>






        </>
    );
}

export default IntegrationList;