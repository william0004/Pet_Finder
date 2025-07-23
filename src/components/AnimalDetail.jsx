import { useParams } from 'react-router-dom';

function AnimalDetail({ animals }) {
  const { id } = useParams();
  const animal = animals.find(a => String(a.id) === id);

  if (!animal) {
    return <div>Animal not found.</div>;
  }

  return (
    <div className="animal-detail">
      <h2>{animal.name}</h2>
      {animal.photos && animal.photos.length > 0 ? (
        <img className='animal-image'
          src={animal.photos[0].medium}
          alt={animal.name}
        />
      ) : (
        <div className='no-animal-image'>No photo available.</div>
      )}
      <p>Breed: {animal.breeds.primary}</p>
      <p>Age: {animal.age}</p>
      <p>Gender: {animal.gender}</p>
      <p>Size: {animal.size}</p>
      <p>Description: {animal.description || 'No description.'}</p>
      <br></br>
      <div>
        <h4>Adoption Status: </h4>
        <p>{animal.status}</p>
      </div>
      <br></br>
      <div>
        <h4>Contact Info:</h4>
        <p>Email: {animal.contact?.email || 'N/A'}</p>
        <p>Phone: {animal.contact?.phone || 'N/A'}</p>
        <p>Address: {animal.contact?.address?.city || ''} {animal.contact?.address?.state || ''}</p>
      </div>
    </div>
  );
}

export default AnimalDetail;