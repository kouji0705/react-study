import { useOutletContext } from "react-router-dom";
import type { LayoutContextType } from "./Layout";

export default function Dashboard() {
  // Receive the context from Layout
  const { count, setCount, message } = useOutletContext<LayoutContextType>();

  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>Message from Layout: <strong>{message}</strong></p>
      
      <div style={{ border: "1px solid #eee", padding: "15px", borderRadius: "8px", background: "#f9f9f9" }}>
        <p>Count from Context: <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>{count}</span></p>
        
        <button 
          onClick={() => setCount((c) => c + 1)}
          style={{ padding: "8px 16px", cursor: "pointer", background: "#007bff", color: "white", border: "none", borderRadius: "4px" }}
        >
          Increment Count
        </button>
      </div>
    </div>
  );
}
