import { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

const App1 = lazy(
  () => import('App1/App')
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          i'm the host app
        </p>
      </header>

      <Suspense fallback={'loading...'}>
        <App1 />
      </Suspense>
    </div>
  );
}

export default App;
