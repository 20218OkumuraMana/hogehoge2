export default function TwiceResult(props) {
    return (
      <div>
        <h2>気になる結果は…？</h2>
        {props.x}^2 = {props.x * props.x}
        <h2>目標値からどれだけ離れているか</h2>
        {props.x*props.x > props.target ? props.x * props.x - props.target : props.tardet - props.x * props.x}
      </div>
    );
  };
  