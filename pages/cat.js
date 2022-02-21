import Welcome from '/components/welcome';

export default function Dog() {
  return (
    <div>
      <Welcome />
      <h1>人気猫種ランキング</h1>
      <ol>
        <li>スコティッシュ・フォールド</li>
        <li>マンチカン</li>
        <li>混血猫</li>
      </ol>
    </div>
  );
}
