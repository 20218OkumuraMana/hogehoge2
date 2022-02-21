import Image from 'next/image';

export default function FishList() {
  return (
    <div>
      <h1 className="fish-title">カツオ</h1>
      <p>暖海・外洋性の大型肉食魚</p>
      <Image
        src="/bonito.png"
        alt="カツオ"
        width={250}
        height={150}
      />
    </div>
  );
}
