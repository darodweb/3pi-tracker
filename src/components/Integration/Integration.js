import './Integration.css';


const Integration = ({ integration, deleteIntegration, setintegrationDb, integrationDb }) => {


    // const handleDelete = (id) => {

    //     // let toDelete = integration.find((element) => element.id !== integration.id);
    //     let integrationId = integration.id

    //     // dbIntegrations.doc(id).delete().then(() => {

    //     //     // setIntegration(integrationId);
    //     //     console.log(integrationId);
    //     // })


    //     // db.collection("cities").doc("DC").delete().then(function () {
    //     //     console.log("Document successfully deleted!");
    //     // }).catch(function (error) {
    //     //     console.error("Error removing document: ", error);
    //     // });
    // }

    console.log(integrationDb.flat());

    //Function to delete an integration from local state
    const deleteIntegrationHandler = () => {
        setintegrationDb(integrationDb.flat().filter((el) => el.id !== integration.id))
    }

    return (
        <>

            <div className="wrapper">
                <div className="integration-upper-row">
                    <div className="integration-upper-row_1">
                        <p>{integration.date}</p>
                        <p>{integration.type}</p>
                        <p>CSR: {integration.csr}</p>
                    </div>
                    <div className="integration-upper-row_2">
                        <p style={{ marginRight: '55px' }}>Status</p>
                    </div>
                </div>

                <div className="integration-main-body" integration>
                    <p>{integration.description}</p>
                    <p className="status">{integration.status}</p>
                </div>

                <div className="integration-lower-text">
                    <div className="integration-lower-text_1">
                        <a href="{integration.bugzillaCrm}"><p>Bugzilla Ticket</p></a>
                        <a href="{integration.crmUrl}"><p>CRM Ticket</p></a>
                        <p>Notes</p>
                    </div>

                    <div className="integration-lower-text_buttons">
                        <button className="edit">Edit</button>
                        <button className="delete mx-3" onClick={deleteIntegrationHandler}>Delete</button>
                    </div>
                </div>
            </div>

        </>


    );
}

export default Integration;