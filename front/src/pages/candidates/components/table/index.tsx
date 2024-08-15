import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { useEffect, useState } from 'react';

interface Candidate {
  rank: number;
  candidateName: string;
  party: string;
  votes: number;
  percentage: string;
}

export default function CandidateTable() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/candidates.json'); 
        const data = await response.json();
        
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div className="py-8">
          <Table>
            <TableCaption>Election Candidate Data</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate Name</TableHead>
                <TableHead>Party</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Votes</TableHead>
                <TableHead className="text-right">Rank</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.rank}>
                  <TableCell>{candidate.candidateName}</TableCell>
                  <TableCell>{candidate.party}</TableCell>
                  <TableCell>{candidate.percentage}</TableCell>
                  <TableCell>{candidate.votes}</TableCell>
                  <TableCell className="text-right">
                    {candidate.rank}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
    </>
  );
}
