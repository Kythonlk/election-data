import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function ElectionResultsChart() {
  const [candidates, setCandidates] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/candidates.json');
        const data = await response.json();

        const candidatesWithColors = data.map(candidate => ({
          ...candidate,
          color: getRandomColor(),
        }));

        setCandidates(candidatesWithColors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={600}>
      <PieChart>
        <Legend />
        <Pie
          data={candidates}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="votes"
        >
          {candidates.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color} 
              name={entry.candidateName}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}