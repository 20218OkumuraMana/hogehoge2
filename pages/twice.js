import { useState } from 'react';
import TwiceResult from'/components/twiceResult';

export default function Twice(){
    const [num, setNum] = useState(0);
    const [target, setTarget] = useState(0);

    const handlerChangeNum = (e) => {
        setNum(e.target.value);
    }
    
    const handlerChangeTarget = (e) => {
         setTarget(e.target.value);
    };
    
    return (
        <div>
          <h1>2乗値を求めるアプリ</h1>
          <div>
          2乗値を求めたい値は？
          <input
            type="number"
            value={num}
            onChange={handlerChangeNum}
          />
        </div>
        <div>
          目標値
          <input
            type='number'
            value={target}
            onChange={handlerChangeTarget}
            />
        </div>
    
          <TwiceResult x={num} target={target}/>
        </div>
      );
}