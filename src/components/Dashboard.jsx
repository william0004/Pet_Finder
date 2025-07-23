// src/components/Dashboard.jsx
import { Link } from 'react-router-dom';

function Dashboard({ animals }) {
  return (
    <div className="dashboard-grid">
      {animals.map(animal => (
        <div className="animal-card" key={animal.id}>
          <Link className="animal-card-info" to={`/animal/${animal.id}`}>
            {animal.photos && animal.photos.length > 0 ? (
              <img
                src={animal.photos[0].small}
                alt={animal.name}
                className="animal-image-pre"
              />
            ) : (
              <div  className="animal-image-pre">
                No Photo
              </div>
            )}
            <h3>{animal.name}</h3>
            <p>{animal.breeds.primary}</p>
            <p>{animal.age} | {animal.gender}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
