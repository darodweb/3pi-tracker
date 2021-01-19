import { useState, useContext } from 'react';
import { IntegrationContext } from '../../IntegrationContext/IntegrationContext';
import './Form.css';
import { dbIntegrations } from '../../IntegrationContext/IntegrationContext';

const Form = () => {
    const [integration, setIntegration] = useContext(IntegrationContext);
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [bugzillaUrl, setBugzillaUrl] = useState("");
    const [crmUrl, setCrmUrl] = useState("");
    const [integrationType, setIntegrationType] = useState("");
    const [status, setStatus] = useState("");
    const [csr, setCsr] = useState("");
    const [notes, setNotes] = useState("");


    const handleChangeDate = (event) => {
        setDate(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }
    const handleChangeBugzillaUrl = (event) => {
        setBugzillaUrl(event.target.value);
    }
    const handleChangeCrmUrl = (event) => {
        setCrmUrl(event.target.value);
    }
    const handleChangeIntegrationType = (event) => {
        setIntegrationType(event.target.value);
    }
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    }
    const handleChangeCsr = (event) => {
        setCsr(event.target.value);
    }
    const handleChangeNotes = (event) => {
        setNotes(event.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIntegration({
            date: date,
            description: description,
            bugzillaUrl: bugzillaUrl,
            crmUrl: crmUrl,
            integrationType: integrationType,
            status: status,
            csr: csr,
            notes: notes,
        })
        registerIntegration();
        setDate("");
        setDescription("");
        setBugzillaUrl("");
        setCrmUrl("");
        setIntegrationType("");
        setStatus("");
        setCsr("");
        setNotes("");
    }


    const registerIntegration = () => {

        let record = {
            date: date,
            description: description,
            bugzillaUrl: bugzillaUrl,
            crmUrl: crmUrl,
            integrationType: integrationType,
            status: status,
            csr: csr,
            notes: notes,
            // date: firebase.firestore.Timestamp.fromDate(new Date())
        };

        dbIntegrations.add(record).then(({ id }) => {
            console.log(`The integration was successfully registered with id: ${id}`);
        })


    }







    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center form-title">Add New Integration {integration.description}</h3>

                    <input
                        type="date"
                        className="form-control"
                        name="date"
                        placeholder="Date"
                        required
                        onChange={handleChangeDate}
                        value={date}
                    />

                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Description"
                        required
                        onChange={handleChangeDescription}
                        value={description}
                    />

                    <input
                        type="text"
                        className="form-control"
                        name="bugzillaUrl"
                        placeholder="Bugzilla URL"
                        required
                        onChange={handleChangeBugzillaUrl}
                        value={bugzillaUrl}
                    />

                    <input
                        type="text"
                        className="form-control"
                        name="crmUrl"
                        placeholder="CRM URL"
                        required
                        value={crmUrl}
                        onChange={handleChangeCrmUrl}
                    />

                    <select
                        name="integrationtype"
                        className="form-control"
                        value={integrationType}
                        onChange={handleChangeIntegrationType}>
                        <option value="">--Select an integration--</option>
                        <option value="Clever">Clever</option>
                        <option value="Sftp Sync">SFTP Sync</option>
                        <option value="API Feed">API Feed</option>
                        <option value="VNN">VNN</option>
                        <option value="CMS4Schools">CMS4Schools</option>
                        <option value="Blackbaud">Blackbaud</option>
                        <option value="FS Google oAuth">FS Google oAuth</option>
                        <option value="TR Google oAuth">TR Google oAuth</option>
                        <option value="rWO Google oAuth">rWO Google oAuth</option>
                        <option value="ATS">ATS</option>
                        <option value="FS LDAP">FS LDAP</option>
                        <option value="rWO LDAP">rWO LDAP</option>
                        <option value="Web Service">Web Service</option>
                        <option value="FS Google Calendar">FS Google Calendar</option>
                        <option value="Big Teams">Big Teams</option>
                        <option value="Finalsite">Finalsite</option>
                        <option value="API Feed for Digital Signage">API Feed for Digital Signage</option>
                        <option value="Dynacal">Dynacal</option>
                    </select>

                    <select
                        name="Status"
                        className="form-control"
                        value={status}
                        onChange={handleChangeStatus}>
                        <option value="">--Select current status--</option>
                        <option value="In Progress">In Progress</option>
                        <option value="In Program.">Forwarded to Programming</option>
                        <option value="Completed">Completed</option>
                    </select>

                    <input
                        type="text"
                        className="form-control"
                        name="CSR"
                        placeholder="CSR"
                        required
                        onChange={handleChangeCsr}
                        value={csr}
                    />

                    <textarea
                        name="notes"
                        className="form-control"
                        rows="5"
                        cols="33"
                        placeholder="Notes..."
                        value={notes}
                        onChange={handleChangeNotes}
                    ></textarea>


                    <div className="button-wrapper">
                        <button
                            type="submit"
                            className="submit-button text-center btn btn-light"
                        >Add integration</button>
                    </div>

                </form>
            </div>

        </>

    );
}

export default Form;