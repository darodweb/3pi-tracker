import { useState, useEffect, useContext } from 'react';
import { CardContext } from '../../CardContext/CardContext';
import { useForm } from "react-hook-form";
import './Form.css';

const Form = () => {
    const [integration, setIntegration] = useContext(CardContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [bugzillaUrl, setBugzillaUrl] = useState("");
    const [crmUrl, setCrmUrl] = useState("");
    const [integrationType, setIntegrationType] = useState("");
    const [status, setStatus] = useState("");
    const [csr, setCsr] = useState("");
    const [notes, setNotes] = useState("");

    const onSubmit = (data) => {
        setDate(data.date)
        setDescription(data.description)
        setBugzillaUrl(data.bugzillaUrl)
        setCrmUrl(data.crmUrl)
        setIntegrationType(data.integration)
        setStatus(data.status)
        setCsr(data.csr)
        setNotes(data.notes);

        console.log(data);

    }






    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center form-title">Add New Integration</h3>

                    <input
                        type="date"
                        className="form-control"
                        name="date"
                        placeholder="Date"
                        required
                        // value={date}
                        ref={register({ required: true })}
                    />

                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Description"
                        required
                        // value={description}
                        ref={register({ required: true })}
                    />

                    <input
                        type="text"
                        className="form-control"
                        name="bugzillaUrl"
                        placeholder="Bugzilla URL"
                        required
                        onSubmit={handleSubmit(onSubmit)}
                        // value={bugzillaUrl}
                        ref={register({ required: true })}
                    />

                    <input
                        type="text"
                        className="form-control"
                        name="crmUrl"
                        placeholder="CRM URL"
                        required
                        // value={crmUrl}
                        ref={register({ required: true })}
                    />

                    <select
                        name="integration"
                        className="form-control"
                        // value={integrationType}
                        ref={register({ required: true })}>
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
                        // value={status}
                        ref={register({ required: true })}>
                        <option value="">--Select current status--</option>
                        <option value="in progress">In Progress</option>
                        <option value="forwarded to programming">Forwarded to Programming</option>
                        <option value="completed">Completed</option>
                    </select>

                    <select
                        name="csr"
                        className="form-control"
                        // value={csr}
                        ref={register({ required: true })}>
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
                        // value={notes}
                        ref={register}
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