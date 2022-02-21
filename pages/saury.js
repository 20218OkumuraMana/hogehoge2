import Image from 'next/image';

export default function Saury() {
  return (
    <div>
      <h1 className="fish-title">サンマ</h1>
      <p><span className="kita-taiheiyou">北太平洋に</span><span className="bold">広く</span>生息する。</p>
      <Image
        src="/saury.png"
        alt="サンマ"
        width={250}
        height={150}
      />
    </div>
  );
}