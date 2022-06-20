
import './App.css';
import {ChatProvider} from "./context/ChatContext"
import Container from './components/Container'
function App() {
  return (
    <ChatProvider>
    <h2>
    
    </h2>
      <Container/>
    </ChatProvider>
  );
}

export default App;
