import Image from "next/image";

interface GridOrderImageProps {
  ProductImage: string;
}

export const GridOrderImage = ({ ProductImage }: GridOrderImageProps) => (
  <div>
    <Image
      className="rounded-xl h-20 md:ml-3"
      src={ProductImage}
      alt="order-item"
    />
  </div>
);
