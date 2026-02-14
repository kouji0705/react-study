import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <div style={{ padding: "20px" }}>
              <h2>Home Page</h2>
              <p>Welcome! Navigation is handled by the Layout component.</p>
              <p>Go to Dashboard to see context sharing in action.</p>
            </div>
          } />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
