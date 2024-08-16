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
  candidate: string;
  english_party: string;
  votes: number;
  percentage: string;
}

export default function CandidateTable() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/candidates_name.json'); 
        const data = await response.json();
        
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 
  // "candidate": "K.A. Kularathna",
  // "english_name": "K. Ananda Kularathna",
  // "english_party": "Independent",
  // "sinhala_candidate": "කේ. ආනන්ද කුලරත්න",
  // "sinhala_party": "ස්වාධීන"
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
                  <TableCell>{candidate.candidate}</TableCell>
                  <TableCell>{candidate.english_party}</TableCell>
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
