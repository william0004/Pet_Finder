import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Charts({ animals }) {

  const speciesCount = {};
  animals.forEach(a => {
    speciesCount[a.species] = (speciesCount[a.species] || 0) + 1;
  });
  const speciesData = Object.entries(speciesCount).map(([name, value]) => ({ name, value }));


  const ageCount = {};
  animals.forEach(a => {
    ageCount[a.age] = (ageCount[a.age] || 0) + 1;
  });
  const ageData = Object.entries(ageCount).map(([name, value]) => ({ name, value }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="charts-container">
      <div className="chart-block">
        <h3>Species Distribution</h3>
        <PieChart width={220} height={220}>
          <Pie
            data={speciesData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {speciesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="chart-block">
        <h3>Age Distribution</h3>
        <BarChart width={240} height={220} data={ageData}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default Charts;