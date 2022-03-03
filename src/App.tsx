import './App.css';
import Wrapper from './components/Wrapper';
import setupMock from './mock-api/MockFetch';

setupMock();

function App() {
  return (
    <>
    <Wrapper/>
    </>
  );
}

export default App;
