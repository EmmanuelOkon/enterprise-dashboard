import Image from "next/image";

interface Props {
  EmployeeImage: string;
  Name: string;
}

export const GridEmployeeProfile = ({ EmployeeImage, Name }: Props) => (
  <div className="flex items-center gap-2">
    <Image
      className="rounded-full w-10 h-10"
      src={EmployeeImage}
      alt="employee"
    />
    <p>{Name}</p>
  </div>
);
