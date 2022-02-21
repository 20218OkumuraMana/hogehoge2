import Welcome from '/components/welcome';
import Link from'next/link';

export default function Dog() {
  return (
    <div>
      <Welcome />
      <Link href="/cat">
          <a>猫派の人はこちら</a>
     </Link>

      <h1>人気犬種ランキング</h1>
      <ol>
        <li className="best-dog">トイ・プードル</li>
        <li>チワワ</li>
        <li>MIX犬</li>
      </ol>
    </div>
  );
}
