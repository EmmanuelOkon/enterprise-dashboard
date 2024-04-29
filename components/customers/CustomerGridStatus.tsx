interface CustomerGridStatusProps {
  Status: string;
  StatusBg: string;
}

export const CustomerGridStatus = ({ Status, StatusBg }: CustomerGridStatusProps) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: StatusBg }} className="rounded-full h-3 w-3" />
    <p>{Status}</p>
  </div>
);
