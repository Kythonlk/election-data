import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export default function DistrictTable() {

  const districts = [
    {
      name: 'Colombo',
      leadingCandidate: 'A. B. Silva',
      party: 'SLPP',
      votes: 5000,
      percentage: 52,
      details: 'Colombo district is the capital region of Sri Lanka.'
    },
    {
      name: 'Galle',
      leadingCandidate: 'R. Perera',
      party: 'UNP',
      votes: 3200,
      percentage: 48,
      details: 'Galle district is known for its historical importance.'
    },
    {
      name: 'Kandy',
      leadingCandidate: 'S. Fernando',
      party: 'JVP',
      votes: 2100,
      percentage: 21,
      details: 'Kandy district is famous for the Temple of the Tooth.'
    },
    {
      name: 'Jaffna',
      leadingCandidate: 'M. Kumar',
      party: 'TNA',
      votes: 6450,
      percentage: 64,
      details: 'Jaffna district is the cultural capital of Tamils in Sri Lanka.'
    },
    {
      name: 'Matara',
      leadingCandidate: 'P. Gunawardena',
      party: 'SLFP',
      votes: 3980,
      percentage: 40,
      details: 'Matara is known for its historical fort and natural beauty.'
    }
  ];

  return (
    <div className="py-8">
      <Table>
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
          {districts.map((district, index) => (
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
  );
}
