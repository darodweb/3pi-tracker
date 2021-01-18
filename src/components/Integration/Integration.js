import { useContext, useEffect } from 'react';
import './Integration.css';
import { IntegrationContext } from '../../IntegrationContext/IntegrationContext';
import { Link, Redirect } from "react-router-dom";
import { dbIntegrations } from '../../IntegrationContext/IntegrationContext';


const Integration = (element) => {
    const [integration, setIntegration] = useContext(IntegrationContext);



    const handleDelete = (id) => {
        console.log(integration.id)
        // let toDelete = integration.find((element) => element.id !== integration.id);
        let integrationId = integration.id

        // dbIntegrations.doc(id).delete().then(() => {

        //     // setIntegration(integrationId);
        //     console.log(integrationId);
        // })


        // db.collection("cities").doc("DC").delete().then(function () {
        //     console.log("Document successfully deleted!");
        // }).catch(function (error) {
        //     console.error("Error removing document: ", error);
        // });
    }

    console.log(integration)
    console.log(element.date)
    return (
        <>
            {integration ? integration.map((element, key) => (

                <div className="wrapper" key={key}>
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
                            <Link to={`${element.bugzillaCrm}`}><p>Bugzilla Ticket</p></Link>
                            <Link to={`${element.crmUrl}`}><p>CRM Ticket</p></Link>
                            <p>Notes</p>
                        </div>

                        <div className="integration-lower-text_buttons">
                            <button className="edit">Edit</button>
                            <button onClick={handleDelete} className="delete mx-3">Delete</button>
                        </div>

                    </div>
                </div>

            ))
                : <h3>There are no integrations at this time.</h3>
            }




        </>


    );
}

export default Integration;