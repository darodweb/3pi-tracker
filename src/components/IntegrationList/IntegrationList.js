import { useContext } from 'react';
import Integration from '../Integration/Integration';
import { IntegrationContext } from '../../IntegrationContext/IntegrationContext';
import IntegrationsPending from '../IntegrationPending/IntegrationsPending';

const IntegrationList = () => {
    const integration = useContext(IntegrationContext);
    const pendingIntegration = useContext(IntegrationContext);
    const integrationDb = useContext(IntegrationContext);

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

    console.log(integrationDb);

    return (

        <>



            <div style={{ display: 'flex', justifyContent: 'spaceEvenly', flexDirection: 'row' }}>

                <div class='integration-container'>
                    <IntegrationsPending />
                    <Integration integration={integrationDb} style={{ padding: '2rem' }} />
                </div>
            </div>






        </>
    );
}

export default IntegrationList;