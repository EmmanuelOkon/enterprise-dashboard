import { Button } from "../ui/button";

interface GridOrderStatusProps {
  Status: string;
  StatusBg: string;
}

export const GridOrderStatus = ({ Status, StatusBg }: GridOrderStatusProps) => (
  <Button
    type="button"
    style={{ background: StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {Status}
  </Button>
);