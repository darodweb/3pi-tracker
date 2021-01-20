import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const IntegrationsPending = ({ integrationInProgramming, integrationInProgress, pendingIntegration }) => {
    ;


    const flattenedPendingIntegration = pendingIntegration.flat();

    // useEffect(() => {
    //     setpendingIntegrations([...pendingIntegrations, integrationInProgress]);
    //     setpendingIntegrations([...pendingIntegrations, integrationInProgramming]);

    // }, [])

    console.log(flattenedPendingIntegration);

    return (
        <>
            {flattenedPendingIntegration ? flattenedPendingIntegration.map((element, index) => (
                <div className="wrapper" key={index} >
                    <div className="integration-upper-row">
                        <div className="integration-upper-row_1">
                            <p>{element.date}</p>
                            <p>{element.type}</p>
                            <p>CSR: {element.csr}</p>
                        </div>
                        <div className="integration-upper-row_2">
                            <p style={{ marginRight: '55px' }}>Status</p>
                        </div>
                    </div>

                    <div className="integration-main-body" integration>
                        <p>{element.description}</p>
                        <p className={`status`
                            // element.status === 'In Program.' && 'status-inProgramming status' ||
                            // element.status === 'In Progress' && 'status-inProgress status' ||
                            // element.status === 'Completed' && 'status-completed status'
                        }>{element.status}</p>
                    </div>

                    <div className="integration-lower-text">
                        <div className="integration-lower-text_1">
                            <Link to={`${element.bugzillaCrm}`}><p>Bugzilla Ticket</p></Link>
                            <Link to={`${element.crmUrl}`}><p>CRM Ticket</p></Link>
                            <p>Notes</p>
                        </div>

                        <div className="integration-lower-text_buttons">
                            <button className="edit">Edit</button>
                            <button className="delete mx-3">Delete</button>
                        </div>

                    </div>
                </div>

            )) :
                <h4> There are no PENDING integrations</h4>
            }







        </>
    );
}

export default IntegrationsPending;