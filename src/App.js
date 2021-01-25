import React, { useState, useEffect } from 'react';
import './components/Integration/Integration.css';
// import { IntegrationContextProvider } from './IntegrationContext/IntegrationContext';
import IntegrationList from './components/IntegrationList/IntegrationList';
import { BrowserRouter, Switch } from 'react-router-dom';
import Form from './components/Form/Form';
import { dbIntegrations } from './Firebase/Firebase';


function App() {
  const [integrationDb, setintegrationDb] = useState([]);
  const [pendingIntegration, setPendingIntegration] = useState([]);


  //Query to get all integrations

  useEffect(() => {

    dbIntegrations.get().then((querySnapshot) => {
      const intDb =
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })

      console.log('Este es el valor de integrtionDb:', intDb.flat());
      setintegrationDb([...integrationDb, intDb].flat());
    })
  }, [])


  //Query integrations marked "In Progress"

  useEffect(() => {

    dbIntegrations.where("status", "==", "In Progress").get()
      .then((querySnapshot) => {
        const inProgress =
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })

        console.log('Este es el valor de inProgress:', inProgress.flat());
        setPendingIntegration([...pendingIntegration, inProgress].flat());
      })

  }, [integrationDb])


  //Query integrations marked "In Programming" 
  useEffect(() => {

    dbIntegrations.where("status", "==", "In Program.").get()
      .then((querySnapshot) => {
        const inProgramming =
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })

        console.log('Este es el valor de inProgramming:', inProgramming.flat());
        setPendingIntegration([...pendingIntegration, inProgramming].flat());
      })

  }, [integrationDb])


  // Callback to be passed down to the Form component so it can change the integrationDb state upon submission of new integration.

  const addNewIntegration = (newData) => {
    setintegrationDb(newData);
    console.log(newData);
  }

  const deleteIntegration = (id) => {
    console.log(id);
    console.log(pendingIntegration);
    const updatedIntegrations = pendingIntegration.filter(pendingInt => pendingInt.id !== id)
    setintegrationDb(updatedIntegrations);
    console.log(integrationDb.length);
    dbIntegrations.doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

  return (
    <>

      <BrowserRouter>

        <h1 className="text-center mt-5 mb-5">3PI Tracker</h1>
        <div className="d-flex">
          <Form addNewIntegration={addNewIntegration} />
          {/* <SearchFilter /> */}
          <IntegrationList
            integrationDb={integrationDb}
            pendingIntegration={pendingIntegration}
            deleteIntegration={deleteIntegration} />
        </div>
        <Switch>

        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
