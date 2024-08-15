import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const electionData = [
  {
    candidate: 'AKD',
    votes: Math.floor(Math.random() * 5000000) + 1000000,
  },
  {
    candidate: 'Sajith',
    votes: Math.floor(Math.random() * 5000000) + 1000000,
  },
  {
    candidate: 'Namal',
    votes: Math.floor(Math.random() * 5000000) + 1000000,
  },
  {
    candidate: 'Ranil',
    votes: Math.floor(Math.random() * 5000000) + 1000000,
  }
];

export default function ElectionResultsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={electionData}>
        <XAxis
          dataKey="candidate"
          stroke="#fff"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#fff"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Bar dataKey="votes" fill="#fff" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
