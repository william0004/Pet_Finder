// src/components/Stats.jsx
import Charts from './Charts';

function Stats({ data, animals}) {
  const total = data.length;

  const avgAge = total > 0
    ? Math.round(
        (data.reduce((sum, animal) => {
          const ageMap = { Baby: 0.5, Young: 1, Adult: 3, Senior: 7 };
          return sum + (ageMap[animal.age] ?? 2); 
        }, 0) / total) * 10
      ) / 10
    : 'N/A';

  const maleCount = data.filter((a) => a.gender === 'Male').length;
  const femaleCount = data.filter((a) => a.gender === 'Female').length;

  return (
    <div className="stats-container">
      <div className="stats-data">
        <div className="stats-item stats-total">Total Pets: <strong>{total}</strong></div>
        <div className="stats-item stats-age">Average Age Estimate (years): <strong>{avgAge}</strong></div>
        <div className="stats-item stats-gender">Gender Ratio: <strong>{maleCount} ♂ / {femaleCount} ♀</strong></div>
      </div>
      <div className="stats-charts">
        <Charts animals={animals} />
      </div>
    </div>
  );
}

export default Stats;
