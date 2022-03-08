import './App.css';
import Wrapper from './components/Wrapper';
import setupMockFetch from './mock-api/MockFetch';
import {setupMockSocketServer} from './mock-api/MockSocket';

setupMockFetch();
setupMockSocketServer();


function App() {
  return (
    <>
    <Wrapper/>
    </>
  );
}

export default App;
