import Link from 'next/link';

export default function FishList() {
  return (
    <div>
      <h1>魚一覧</h1>
      <ul>
        <li>
          <Link href="/bonito">
            <a>カツオ</a>
          </Link>
        </li>
        <li>
            <Link href="/saury">
                <a>サンマ</a>
            </Link>
        </li>
      </ul>
    </div>
  );
}
