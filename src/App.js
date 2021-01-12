import './App.css';
import { IntegrationContextProvider } from './IntegrationContext/IntegrationContext';
import Integration from './components/Integration/Integration';
import IntegrationList from './components/IntegrationList/IntegrationList';

function App() {
  return (
    <>
      <IntegrationContextProvider>

        <h1 className="text-center mt-5 mb-5">3PI Tracker</h1>

        {/* <SearchFilter /> */}
        <IntegrationList />


      </IntegrationContextProvider>
    </>
  );
}

export default App;
