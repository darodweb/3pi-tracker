import Integration from '../Integration/Integration';
import IntegrationsPending from '../IntegrationPending/IntegrationsPending';

const IntegrationList = ({ integrationInProgramming, integrationDb, pendingIntegration, integrationInProgress }) => {


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
                    <IntegrationsPending
                        integrationInProgramming={integrationInProgramming}
                        pendingIntegration={pendingIntegration}
                        integrationInProgress={integrationInProgress} />
                    {/* <Integration integrationDb={integrationDb} style={{ padding: '2rem' }} /> */}
                </div>
            </div>






        </>
    );
}

export default IntegrationList;