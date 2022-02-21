import { useState } from 'react';

export default function AddUser() {
  const [username, setUsername] = useState('名無しさん');
  const [result, setResult] = useState('');

  const handlerChange = (e) => {
    setUsername(e.target.value);
  };

  const handlerClick = (e) => {
    fetch(
      '/api/add',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: username
        })
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setResult('追加しました。');
      });
  };

  return (
    <div>
      <h1>ユーザーの追加</h1>

      <div>
        <input
          type="text"
          value={username}
          onChange={handlerChange}
        />
        <button onClick={handlerClick}>
          追加
        </button>
      </div>

      {result}
    </div>
  );
}
