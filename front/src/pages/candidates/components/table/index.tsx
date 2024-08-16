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
import { useLanguage } from '@/components/layout/lang-ctx';

interface Candidate {
  rank: number;
  candidate: string;
  english_party: string;
  votes: number;
  percentage: string;
  sinhala_candidate: string;
  sinhala_party: string;
}

export default function CandidateTable() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const { language } = useLanguage();

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

  return (
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
            
              <TableCell>
                {language
                  ? candidate.sinhala_candidate
                  : candidate.candidate}
              </TableCell>
              <TableCell>
                {language
                  ? candidate.sinhala_party
                  : candidate.english_party}
              </TableCell>
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
  );
}
