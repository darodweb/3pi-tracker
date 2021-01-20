import React, { useState, useEffect } from 'react';
import './components/Integration/Integration.css';
// import { IntegrationContextProvider } from './IntegrationContext/IntegrationContext';
import IntegrationList from './components/IntegrationList/IntegrationList';
import { BrowserRouter, Switch } from 'react-router-dom';
import Form from './components/Form/Form';
import { dbIntegrations } from './Firebase/Firebase';


function App() {
  const [integrationDb, setintegrationDb] = useState([]);
  const [newIntegration, setNewIntegration] = useState([]);
  const [pendingIntegration, setPendingIntegration] = useState([]);


  //Query to get all integrations
  console.log(pendingIntegration)
  useEffect(() => {
    console.log(pendingIntegration)
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

  }, [])


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

  }, [])


  // Callback to be passed down to the Form component so it can change the integrationDb state upon submission of new integration.

  const addNewIntegration = (newData) => {
    setintegrationDb(newData);
  }

  console.log(`Estas son las pending:`, pendingIntegration);
  return (
    <>

      <BrowserRouter>

        <h1 className="text-center mt-5 mb-5">3PI Tracker</h1>
        <div className="d-flex">
          <Form addNewIntegration={addNewIntegration} />
          {/* <SearchFilter /> */}
          <IntegrationList
            integrationDb={integrationDb}
            pendingIntegration={pendingIntegration} />
        </div>
        <Switch>

        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
