import Image from "next/image";

interface CardProps {
  id: number;
  name: string;
  priceUsdc: string;
  imageUrl: string;
}

export default function Card({ id, name, priceUsdc, imageUrl }: CardProps) {
  const price = (Number(priceUsdc) / 1000000).toFixed(2);

  return (
    <div
      key={id}
      className="rounded-[20px] overflow-hidden hover:border-[#F5B544] transition-colors"
    >
      <Image
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover rounded-[20px]"
        height={512}
        width={512}
      />
      <div className="p-4">
        <h3 className="text-white text-base font-light mb-4">{name}</h3>
        <p className="text-2xl font-bold text-white">${price}</p>
      </div>
    </div>
  );
}
