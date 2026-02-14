import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// 1. 共有したいデータの型を定義
export type User = {
  name: string;
  email: string;
};

export type LayoutContextType = {
  user: User;
  updateUser: (newUser: User) => void;
};

export default function Layout() {
  // 親側で「ユーザー情報」という状態を持つ
  const [user, setUser] = useState<User>({
    name: "テスト太郎",
    email: "taro@example.com",
  });

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      {/* ヘッダー: 常に表示される */}
      <header style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        padding: "1rem", 
        borderBottom: "2px solid #ddd",
        background: "#f0f0f0"
      }}>
        <h1 style={{ margin: 0, fontSize: "1.2rem" }}>マイアプリ</h1>
        <div>
          {/* 親の状態(user.name)をここに表示 */}
          <span>ようこそ、<strong>{user.name}</strong> さん</span>
        </div>
      </header>

      <nav style={{ padding: "10px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>ホーム</Link>
        <Link to="/dashboard">設定(ダッシュボード)</Link>
      </nav>
      
      <main style={{ padding: "1rem" }}>
        {/* 重要: ここで子を含むすべてのルートに user と updateUser を渡す */}
        <Outlet context={{ user, updateUser } satisfies LayoutContextType} />
      </main>
    </div>
  );
}
