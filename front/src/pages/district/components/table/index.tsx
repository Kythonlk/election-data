import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import RandomVotes from '@/constants/random-votes';
import { useEffect, useState } from 'react';

export default function DistrictTable() {
  const [districtData, setDistrictData] = useState<any>([]);

  useEffect(() => {
    setDistrictData(RandomVotes());  
  }, []); 

  return (
    <div className="py-8 w-full">
         <div className="relative overflow-x-auto">
         <Table className="min-w-full">
        <TableCaption>District-Wise Election Results</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>District</TableHead>
            <TableHead>Leading Candidate</TableHead>
            <TableHead>Party</TableHead>
            <TableHead>Votes</TableHead>
            <TableHead>Percentage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {districtData.map((district, index) => (
              <TableRow
                className="cursor-pointer" 
              >
                <TableCell>{district.name}</TableCell>
                <TableCell>{district.leadingCandidate}</TableCell>
                <TableCell>{district.party}</TableCell>
                <TableCell>{district.votes.toLocaleString()}</TableCell>
                <TableCell>{district.percentage}%</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
  );
}
