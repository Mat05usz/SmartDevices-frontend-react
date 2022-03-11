import './App.css';
import Wrapper from './components/Wrapper';
import {setupMockSocketServer} from './mock-api/MockSocket';

setupMockSocketServer();


function App() {
  return (
    <>
    <Wrapper/>
    </>
  );
}

export default App;
