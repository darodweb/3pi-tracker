import { useContext, useEffect } from 'react';
import './Integration.css';
import { IntegrationContext } from '../../IntegrationContext/IntegrationContext';
import { Link } from "react-router-dom";



const Integration = () => {
    const [integration, setIntegration] = useContext(IntegrationContext);

    useEffect(() => {
        const saveLocalIntegration = () => {
            localStorage.setItem('integrations', JSON.stringify(integration));
        };
        const getLocalIntegration = () => {
            if (localStorage.getItem('integrations') === null) {
                localStorage.setItem('integrations', JSON.stringify([]));
            } else {
                let localIntegration = localStorage.getItem('integrations', JSON.stringify(integration));
                console.log(Array.from(localIntegration));
            }
        }

        saveLocalIntegration();
        getLocalIntegration();
        console.log(integration)
    }, [integration])




    console.log(integration)
    return (
        <>
            {integration ? integration.map((element, index) => (
                <div className="wrapper" key={index}>
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
                        <p className={
                            element.status === 'In Program.' && 'status-inProgramming status' ||
                            element.status === 'In Progress' && 'status-inProgress status' ||
                            element.status === 'Completed' && 'status-completed status'
                        }>{element.status}</p>
                    </div>

                    <div className="integration-lower-text">
                        <div className="integration-lower-text_1">
                            <Link to={`${element.bugzillaUrl}`}><p>Bugzilla Ticket</p></Link>
                            <Link to={`${element.crmUrl}`}><p>CRM Ticket</p></Link>
                            <p>Notes</p>
                        </div>

                        <div className="integration-lower-text_buttons">
                            <button className="edit">Edit</button>
                            <button className="delete mx-3">Delete</button>
                        </div>

                    </div>
                </div>
            ))
                : null
            }


        </>


    );
}

export default Integration;