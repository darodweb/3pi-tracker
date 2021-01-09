import { useState, useEffect, useContext } from 'react';
import { CardContext } from '../../CardContext/CardContext';
import './Form.css';

const Form = () => {
    const [integration, setIntegration] = useContext(CardContext);
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [bugzillaUrl, setBugzillaUrl] = useState("");
    const [crmUrl, setCrmUrl] = useState("");
    const [integrationType, setIntegrationType] = useState("");
    const [status, setStatus] = useState("");
    const [csr, setCsr] = useState("");
    const [notes, setNotes] = useState("");


    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleChangeBugzillaUrl = (e) => {
        setBugzillaUrl(e.target.value);
    }
    const handleChangeCrmUrl = (e) => {
        setCrmUrl(e.target.value);
    }
    const handleChangeIntegrationType = (e) => {
        setIntegrationType(e.target.value);
    }
    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
    }
    const handleChangeCsr = (e) => {
        setCsr(e.target.value);
    }
    const handleChangeNotes = (e) => {
        setNotes(e.target.value);
    }



    return (
        <>
            <div className="form-container">
                <form>
                    <h3 className="text-center form-title">Add New Integration</h3>

                    <input
                        type="date"
                        className="form-control"
                        name="date"
                        placeholder="Date"
                        // onChange={handleChangeName}
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
                        name="bugzilla url"
                        placeholder="Bugzilla URL"
                        required
                        onChange={handleChangeBugzillaUrl}
                        value={bugzillaUrl}
                    />

                    <input
                        type="text"
                        className="form-control"
                        name="crm url"
                        placeholder="CRM URL"
                        required
                        onChange={handleChangeCrmUrl}
                        value={crmUrl}
                    />

                    <select
                        name="integration"
                        className="form-control">
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
                        className="form-control">
                        <option value="">--Select current status--</option>
                        <option value="in progress">In Progress</option>
                        <option value="forwarded to programming">Forwarded to Programming</option>
                        <option value="completed">Completed</option>
                    </select>

                    <select
                        name="csr"
                        className="form-control">
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
                            type="button"
                            className="submit-button text-center btn btn-light"
                        >Add integration</button>
                    </div>

                </form>
            </div>

        </>

    );
}

export default Form;