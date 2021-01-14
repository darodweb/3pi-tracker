import { useContext } from 'react';
import './Integration.css';
import { IntegrationContext } from '../../IntegrationContext/IntegrationContext';



const Integration = () => {
    const [integration, setIntegration] = useContext(IntegrationContext);

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
                            element.status === 'In Program.' && 'status-inProgramming' ||
                            element.status === 'In Progress' && 'status-inProgress' ||
                            element.status === 'Completed' && 'status-completed'
                        }>{element.status}</p>
                    </div>

                    <div className="integration-lower-text">
                        <div className="integration-lower-text_1">
                            <a href={`${element.bugzillaUrl}`}><p>Bugzilla Ticket</p></a>
                            <a href={`${element.crmUrl}`}><p>CRM Ticket</p></a>
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