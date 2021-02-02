import Integration from '../Integration/Integration';
import { useState, useEffect } from 'react';
import { dbIntegrations } from '../../Firebase/Firebase';


const IntegrationList = ({ integrationDb, deleteIntegration, setintegrationDb }) => {

    const IntegrationDb = integrationDb.flat();
    console.log(IntegrationDb);

    return (

        <>

            <div style={{ display: 'flex', justifyContent: 'spaceEvenly', flexDirection: 'row' }}>

                <div className='integration-container'>
                    {IntegrationDb ? IntegrationDb.map((integration, index) => (
                        <Integration
                            key={integration.id}
                            integration={integration}
                            deleteIntegration={deleteIntegration}
                            setintegrationDb={setintegrationDb}
                            integrationDb={integrationDb}
                            style={{ padding: '2rem' }} />
                    )) :
                        <h4 className="text-center">No pending integrations</h4>}

                </div>

            </div>

        </>
    );
}

export default IntegrationList;