import { Link } from "react-router-dom";
import { dbIntegrations } from '../../Firebase/Firebase';

const IntegrationsPending = ({ pendingInteg, integrationDb, deleteIntegration }) => {
    // const [pendingIntegrations, setpendingIntegrations] = useState([]);


    // useEffect(() => {
    //     const flattenedIntegrationDb = integrationDb.flat();

    //     if (flattenedIntegrationDb.length > 0) {
    //         let integrationsInProgress = flattenedIntegrationDb.filter((el) => (el.status !== 'Completed'.trim()));
    //         console.log(`integrations in Pending`, integrationsInProgress);
    //         setpendingIntegrations(integrationsInProgress);
    //         return;
    //     }


    // }, [integrationDb])

    console.log(pendingInteg.id);

    const handleDeleteIntegration = (pendingInteg) => {
        // dbIntegrations.doc(pendingInteg.id).delete().then(function () {
        //     console.log("Document successfully deleted!");
        // }).catch(function (error) {
        //     console.error("Error removing document: ", error);
        // });
        // deleteIntegration(pendingInteg);
        let prueba = pendingInteg.filter((el) => el.id !== pendingInteg.id)
        console.log(prueba);
    }

    return (
        <>



            <div className="wrapper" >
                <div className="integration-upper-row">
                    <div className="integration-upper-row_1">
                        <p>{pendingInteg.date}</p>
                        <p>{pendingInteg.type}</p>
                        <p>CSR: {pendingInteg.csr}</p>
                    </div>
                    <div className="integration-upper-row_2">
                        <p style={{ marginRight: '55px' }}>Status</p>
                    </div>
                </div>

                <div className="integration-main-body" integration>
                    <p>{pendingInteg.description}</p>
                    <p className="status">{pendingInteg.status}</p>
                </div>

                <div className="integration-lower-text">
                    <div className="integration-lower-text_1">
                        <Link to={`${pendingInteg.bugzillaCrm}`}><p>Bugzilla Ticket</p></Link>
                        <Link to={`${pendingInteg.crmUrl}`}><p>CRM Ticket</p></Link>
                        <p>Notes</p>
                    </div>

                    <div className="integration-lower-text_buttons">
                        <button className="edit">Edit</button>
                        <button onClick={() => handleDeleteIntegration()} className="delete mx-3">Delete</button>
                    </div>

                </div>
            </div>





        </>
    );
}

export default IntegrationsPending;