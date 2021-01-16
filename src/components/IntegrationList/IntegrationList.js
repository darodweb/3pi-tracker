import { useState, useContext } from 'react';
import Form from '../Form/Form';
import Integration from '../Integration/Integration';
import { IntegrationContext } from '../../IntegrationContext/IntegrationContext';
import { dbIntegrations } from '../../IntegrationContext/IntegrationContext';

const IntegrationList = () => {
    const [integration, setIntegration] = useContext(IntegrationContext);
    const [setupDetails, setSetUpDetails] = useState('');
    const [integrationId, setIntegrationId] = useState('');



    console.log(integration);

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

    console.log(setupDetails);



    return (

        <>
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