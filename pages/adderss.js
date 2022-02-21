import { useState, useEffect } from 'react';

export default function Address() {
  const [address, setAddress] = useState('');
  const [top, setTop] = useState('517');
  const [bottom, setBottom] = useState('0012');

  useEffect(() => {
    fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${top}${bottom}`,
      {
        method: 'GET'
      }
    )
      .then((res) => {
        // レスポンス情報からJSONを抜き取り、次のthenに渡す
        return res.json();
      })
      .then((json) => {
        // 住所情報を抜き取る
        const info = json.results[0];
        const result = info.address1 + info.address2 + info.address3;
        setAddress(result);
      });
  }, [top, bottom]);
  const handlerChangeTop = (e) => {
      setTop(e.target.value);
  }

  const handlerChangeBottom = (e) => {
    setBottom(e.target.value);
}
  return (
    <div>
      〒
      <input 
         type="number"
         value={top}
         onChange={handlerChangeTop}
      />
      -
      <input 
         type="number"
         value={bottom}
         onChange={handlerChangeBottom}
      />
      
      の住所は、{address}です。
    </div>
  );
}
