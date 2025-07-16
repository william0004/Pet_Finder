// src/components/Dashboard.jsx
function Dashboard({ animals }) {
  return (
    <div className="dashboard-grid">
      {animals.map((animal) => (
        <div key={animal.id} className="animal-card">
          <img
            src={animal.photos?.[0]?.medium || 'https://placehold.co/150x150?text=No+Image'}
            alt={animal.name}
            className="animal-image"
          />
          <div className="animal-info">
            <h2 className="animal-name">{animal.name}</h2>
            <p className="animal-breed">📛 Breed: {animal.breeds?.primary || 'Unknown'}</p>
            <p className="animal-age">📅 Age: {animal.age}</p>
            <p className="animal-gender">⚧ Gender: {animal.gender}</p>
            <p className="animal-species">🏷️ Species: {animal.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
