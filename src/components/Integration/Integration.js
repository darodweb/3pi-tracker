import React from 'react';
import './Integration.css';



const Integration = ({ integration }) => {

    return (
        <>
            <div className="wrapper">
                <div className="integration-upper-row">
                    <div className="integration-upper-row_1">
                        <p>01/01/2021</p>
                        <p>API Feed</p>
                        <p>CSR: DAN</p>
                    </div>
                    <div className="integration-upper-row_2">
                        <p style={{ marginRight: '55px' }}>Status</p>
                    </div>
                </div>

                <div className="integration-main-body" integration>
                    <p>3PI - Pittsford Mendon/Pittsford Sutherland - API Feed setup</p>
                    <p className="status">In Progr.</p>
                </div>

                <div className="integration-lower-text">
                    <div className="integration-lower-text_1">
                        <p>Bugzilla Ticket</p>
                        <p>CRM Ticket</p>
                        <p>Notes</p>
                    </div>

                    <div className="integration-lower-text_buttons">
                        <button className="edit">Edit</button>
                        <button className="delete mx-3">Delete</button>
                    </div>


                </div>
            </div>

        </>


    );
}

export default Integration;