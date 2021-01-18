import './App.css';
import { IntegrationContextProvider } from './IntegrationContext/IntegrationContext';
import Integration from './components/Integration/Integration';
import IntegrationList from './components/IntegrationList/IntegrationList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <IntegrationContextProvider>
        <BrowserRouter>


          {/* <SearchFilter /> */}
          <IntegrationList />
          <Switch>

          </Switch>
        </BrowserRouter>
      </IntegrationContextProvider>

    </>
  );
}

export default App;
