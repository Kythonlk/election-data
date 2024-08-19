import { useState } from 'react';
import DataTable from '@/components/shared/table-dash';
import { useLanguage } from '@/components/layout/lang-ctx';

const fetchElectionData = async () => {
  const response = await fetch('/division.json');
  return response.json();
};
const ElectionPage = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);
  const { language } = useLanguage();

  const handleRowClick = (district: any) => {
    setSelectedDistrict(district);
  };
  const handleBackClick = () => {
    setSelectedDistrict(null);
  };

  const columns = [
    { key: 'name', label: 'District' },
    { key: 'party', label: 'Party' },
    { key: 'votes', label: 'Votes' },
    { key: 'percentage', label: 'Percentage' }
  ];

  const siColumns = [
    { key: 'sinhalaName', label: 'District' },
    { key: 'sinhalaParty', label: 'Party' },
    { key: 'sinhalaVotes', label: 'Votes' },
    { key: 'sinhalaPercentage', label: 'Percentage' }
  ];

  return (
    <div className="w-full py-8">
      <div className="relative overflow-x-auto">
        {!selectedDistrict ? (
          <>
            <h2 className="p-1 text-lg font-semibold">Election Complaints</h2>
            <DataTable
              columns={language ? siColumns : columns}
              fetchData={fetchElectionData}
              onRowClick={handleRowClick}
            />
          </>
        ) : (
          <div>
            <button
              onClick={handleBackClick}
              className="mb-4 rounded-md bg-gray-200 px-2 py-1 text-gray-900"
            >
              Back to All Districts
            </button>
            <h2 className="text-lg font-semibold">
              {language ? selectedDistrict.sinhalaName : selectedDistrict.name}
            </h2>
            <table className="mt-4 w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-10 px-2 text-left font-medium text-muted-foreground">
                    Area Code
                  </th>
                  <th className="h-10 px-2 text-left font-medium text-muted-foreground">
                    Area Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedDistrict.areas.map((area, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 align-middle">{area.code}</td>
                    <td className="p-2 align-middle">
                      {language ? area.sinhalaName : area.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectionPage;
