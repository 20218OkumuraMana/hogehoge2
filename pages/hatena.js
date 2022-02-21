import { useState } from 'react';

export default function Hatena() {
  const [message, setMessage] = useState('');
  const [count,setCount] = useState(0);

  const handlerClick = (e) => {
    setCount(count + 1);
    setMessage('バァー！！');
  };

  return (
    <div>
      <div>
        <button onClick={handlerClick}>
          ハテナボタン
        </button>
      </div>
      <p>
        {message}
      </p>
      <p>
          {count}回押しました。
      </p>
    </div>
  );
}
