import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { LayoutContextType } from "./Layout";

export default function Dashboard() {
  // Layoutから渡された関数とデータを受け取る
  const { user, updateUser } = useOutletContext<LayoutContextType>();
  
  // 入力フォーム用の一時的なstate
  const [nameInput, setNameInput] = useState(user.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 親の更新関数を呼ぶ -> ヘッダーの名前も変わる！
    updateUser({ ...user, name: nameInput });
    alert("名前を更新しました！ヘッダーを見てみてね。");
  };

  return (
    <div>
      <h2>ユーザー設定 (Dashboard)</h2>
      <p>ここで名前を変更すると、上のヘッダーの表示も連動して変わります。</p>
      
      <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <p>現在の名前: <strong>{user.name}</strong></p>
        <p>現在のEmail: <strong>{user.email}</strong></p>

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>新しい名前:</label>
            <input 
              type="text" 
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              style={{ padding: "5px", width: "100%" }}
            />
          </div>
          <button type="submit" style={{ padding: "8px 16px", background: "#007bff", color: "white", border: "none", cursor: "pointer" }}>
            更新する
          </button>
        </form>
      </div>
    </div>
  );
}
