import { useState, useContext } from 'react';
import Form from '../Form/Form';
import Integration from '../Integration/Integration';
import { IntegrationContext } from '../../IntegrationContext/IntegrationContext';
import { dbIntegrations } from '../../IntegrationContext/IntegrationContext';

const IntegrationList = () => {
    const [integration, setIntegration] = useContext(IntegrationContext);
    const [pendingIntegration] = useContext(IntegrationContext);


    // const registerIntegration = () => {
    //     let setup = {
    //         date: integration.date,
    //         description: integration.description,
    //         bugzillaUrl: integration.bugzillaUrl,
    //         crmUrl: integration.crmUrl,
    //         integrationType: integration.integration,
    //         status: integration.status,
    //         csr: integration.csr,
    //         notes: integration.notes
    //     }
    //     setSetUpDetails(setup);
    // }

    console.log(integration);

    return (

        <>
            <h1 className="text-center mt-5 mb-5">3PI Tracker</h1>


            <div style={{ display: 'flex', justifyContent: 'spaceEvenly', flexDirection: 'row' }}>
                <Form />
                <div class='integration-container'>
                    <Integration integration={integration} style={{ padding: '2rem' }} />
                </div>
            </div>






        </>
    );
}

export default IntegrationList;