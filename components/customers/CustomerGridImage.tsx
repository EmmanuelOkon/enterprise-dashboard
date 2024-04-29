import Image from "next/image";

interface CustomerGridImageProps {
  CustomerImage: string;
  CustomerName: string;
  CustomerEmail: string;
}

export const CustomerGridImage = ({
  CustomerImage,
  CustomerName,
  CustomerEmail,
}: CustomerGridImageProps) => (
  <div className="image flex gap-4">
    <Image
      className="rounded-full w-10 h-10"
      src={CustomerImage}
      alt="employee"
    />
    <div>
      <p>{CustomerName}</p>
      <p>{CustomerEmail}</p>
    </div>
  </div>
);
