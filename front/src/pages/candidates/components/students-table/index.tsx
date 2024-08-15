import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

// type TStudentsTableProps = {
//   rank: number;
//   candidateName: string;
//   party: string;
//   votes: number;
//   percentage: number;
// };

export default function CandidateTable() {
  const candidates = [
    {
      rank: 1,
      candidateName: 'A. B. Silva',
      party: 'SLPP',
      votes: 5230,
      percentage: 0.52
    },
    { rank : 2, candidateName: 'R. Perera', party: 'UNP', votes: 4875, percentage: 0.48 },
    {
      rank : 3,
      candidateName: 'S. Fernando',
      party: 'JVP',
      votes: 2100,
      percentage: 0.21
    },
    { rank : 4,candidateName: 'M. Kumar', party: 'TNA', votes: 6450, percentage: 0.64 },
    {
      rank : 5,
      candidateName: 'P. Gunawardena',
      party: 'SLFP',
      votes: 3980,
      percentage: 0.4
    }
  ];
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
