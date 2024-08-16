import { useEffect, useState } from 'react';

interface DataTableProps {
  columns: Array<{ key: string, label: string }>; 
  fetchData: () => Promise<any[]>; 
  onRowClick: (row: any) => void;
  caption?: string; 
}

export default function  DataTable({ columns, fetchData, onRowClick , caption }: DataTableProps) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, [fetchData]);

  return (
    <table className="w-full caption-bottom text-sm">
      <caption className="mt-4 text-sm text-muted-foreground">
      {caption}
      </caption>
      <thead className="[&_tr]:border-b">
        <tr className="border-b transition-colors hover:bg-muted/50">
          {columns.map((column, index) => (
            <th key={index} className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="[&_tr:last-child]:border-0">
        {data.map((row, index) => (
          <tr
            key={index}
            onClick={() => onRowClick(row)}
            className="cursor-pointer border-b transition-colors hover:bg-muted/50"
          >
            {columns.map((column, idx) => (
              <td key={idx} className="p-2 align-middle">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
