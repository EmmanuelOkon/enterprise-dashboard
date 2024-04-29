import { GrLocation } from "react-icons/gr";

interface Props {
  Country: string;
}

export const GridEmployeeCountry = ({ Country }: Props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{Country}</span>
  </div>
);
