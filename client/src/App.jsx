import { WebSocketProvider } from './context/WebSocketContext.jsx'
import Counter from './components/Counter/Counter.jsx'

import './styles/App.css'

function App() {
  return (
    <WebSocketProvider>
        <Counter />
    </WebSocketProvider>
  )
}

export default App
