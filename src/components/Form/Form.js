import { useState, useEffect, useContext } from 'react';
import { IntegrationContext } from '../../IntegrationContext/IntegrationContext';
import './Form.css';

const Form = ({ registerIntegration }) => {
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
        setIntegration([...integration, {
            date: date,
            description: description,
            bugzillaUrl: bugzillaUrl,
            crmUrl: crmUrl,
            integrationType: integration,
            status: status,
            csr: csr,
            notes: notes
        }])
        setDate("");
        setDescription("");
        setBugzillaUrl("");
        setCrmUrl("");
        setIntegrationType("");
        setStatus("");
        setCsr("");
        setNotes("");
    }

    console.log(integration);



    // const registerIntegration = (integrator) => {

    // let record = {
    //     integration: integration
    // };

    // dbIntegrations.add(record).then(({ id }) => {
    //     setOrderId(id);
    // })


    // }







    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center form-title">Add New Integration. {integration.description}</h3>

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
                        <option value="clever">Clever</option>
                        <option value="sftp sync">SFTP Sync</option>
                        <option value="api feed">API Feed</option>
                        <option value="vnn">VNN</option>
                        <option value="cms4schools">CMS4Schools</option>
                        <option value="blackbaud">Blackbaud</option>
                        <option value="fs google oauth">FS Google oAuth</option>
                        <option value="tr google oauth">TR Google oAuth</option>
                        <option value="rwo google oauth">rWO Google oAuth</option>
                        <option value="ats">ATS</option>
                        <option value="fs ldap">FS LDAP</option>
                        <option value="rwo ldap">rWO LDAP</option>
                        <option value="web service">Web Service</option>
                        <option value="fs google calendar">FS Google Calendar</option>
                        <option value="big teams">Big Teams</option>
                        <option value="finalsite">Finalsite</option>
                        <option value="api feed for digital signage">API Feed for Digital Signage</option>
                        <option value="dynacal">Dynacal</option>
                    </select>

                    <select
                        name="status"
                        className="form-control"
                        value={status}
                        onChange={handleChangeStatus}>
                        <option value="">--Select current status--</option>
                        <option value="in progress">In Progress</option>
                        <option value="forwarded to programming">Forwarded to Programming</option>
                        <option value="completed">Completed</option>
                    </select>

                    <select
                        name="csr"
                        className="form-control"
                        value={csr}
                        onChange={handleChangeCsr}>
                        <option value="">--Select CSR--</option>
                        <option value="dan">Dan</option>
                        <option value="joe">Joe</option>
                    </select>

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