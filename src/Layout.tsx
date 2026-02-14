import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// Define the shape of the context
export type LayoutContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  message: string;
};

export default function Layout() {
  const [count, setCount] = useState(0);
  const [message] = useState("Hello from Layout!");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <h1>React Router v6 Layout</h1>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      
      <main>
        {/* Pass state and functions via context */}
        <Outlet context={{ count, setCount, message } satisfies LayoutContextType} />
      </main>

      <footer style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px", color: "#666" }}>
        <p>Current Count in Layout: {count}</p>
      </footer>
    </div>
  );
}
