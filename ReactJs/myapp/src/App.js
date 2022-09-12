import './App.css';
import Home from "./Component/Home/home";
import Navigation from './Component/Navabar/navbar';
import ErrorBoundary from './ErrorHandling/errorHandling';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Operation from './Operations/operation';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route index element={<Home />} />
          <Route path="operations" element={<Operation />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
