import './App.css';
import { CardContextProvider } from './CardContext/CardContext';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <CardContextProvider>

        <h1 className="text-center mt-5 mb-5">3PI Tracker</h1>
        <Form />

        {/* <Card-Container /> */}

      </CardContextProvider>
    </>
  );
}

export default App;
