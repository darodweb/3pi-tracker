import './components/Integration/Integration.css';
import { IntegrationContextProvider } from './IntegrationContext/IntegrationContext';
import IntegrationList from './components/IntegrationList/IntegrationList';
import { BrowserRouter, Switch } from 'react-router-dom';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <IntegrationContextProvider>
        <BrowserRouter>

          <h1 className="text-center mt-5 mb-5">3PI Tracker</h1>
          <div className="d-flex">
            <Form />
            {/* <SearchFilter /> */}
            <IntegrationList />
          </div>
          <Switch>

          </Switch>
        </BrowserRouter>
      </IntegrationContextProvider>

    </>
  );
}

export default App;
