import './App.css';
import Wrapper from './components/Wrapper';
import setupMock from './mock-api/MockFetch';
import {setupMockSocketServer} from './mock-api/MockSocket';

setupMock();
setupMockSocketServer();


function App() {
  return (
    <>
    <Wrapper/>
    </>
  );
}

export default App;
