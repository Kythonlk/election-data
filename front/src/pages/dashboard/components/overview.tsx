import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const electionData = [
  {
    candidate: 'Candidate A',
    votes: Math.floor(Math.random() * 5000000) + 1000000,
  },
  {
    candidate: 'Candidate B',
    votes: Math.floor(Math.random() * 5000000) + 1000000,
  },
  {
    candidate: 'Candidate C',
    votes: Math.floor(Math.random() * 5000000) + 1000000,
  },
  {
    candidate: 'Candidate D',
    votes: Math.floor(Math.random() * 5000000) + 1000000,
  }
];

export default function ElectionResultsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={electionData}>
        <XAxis
          dataKey="candidate"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Bar dataKey="votes" fill="#4CAF50" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
