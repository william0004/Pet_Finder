// src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalDetail from './components/AnimalDetail';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import Stats from './components/Stats';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';

const CLIENT_ID = import.meta.env.VITE_PETFINDER_API_KEY;
const CLIENT_SECRET = import.meta.env.VITE_PETFINDER_API_SECRET;

function App() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [ageFilter, setAgeFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredAnimals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAnimals = filteredAnimals.slice(startIndex, startIndex + itemsPerPage);


  useEffect(() => {
    async function fetchData() {
      try {
        
        const res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        });
        const tokenData = await res.json();
        const accessToken = tokenData.access_token;

        
        const animalRes = await fetch('https://api.petfinder.com/v2/animals?limit=80', {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        const animalData = await animalRes.json();
        setAnimals(animalData.animals);
        setFilteredAnimals(animalData.animals);
        console.log('API response:', animalData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, speciesFilter, ageFilter, genderFilter]);

  useEffect(() => {
    const filtered = animals.filter((animal) => {
      const query = searchQuery.toLowerCase();
    
      const name = animal.name?.toLowerCase() || '';
      const breed = animal.breeds?.primary?.toLowerCase() || '';
      const age = animal.age?.toLowerCase() || '';
      const gender = animal.gender?.toLowerCase() || '';
      const description = animal.description?.toLowerCase() || '';
    
      const matchesSearch =
        name.includes(query) ||
        breed.includes(query) ||
        age.includes(query) ||
        gender.includes(query) ||
        description.includes(query);
    
      const matchesSpecies = speciesFilter === 'All' || animal.species === speciesFilter;
      const matchesAge = ageFilter === 'All' || animal.age === ageFilter;
      const matchesGender = genderFilter === 'All' || animal.gender === genderFilter;
    
      return matchesSearch && matchesSpecies && matchesAge && matchesGender;
    });
  
    setFilteredAnimals(filtered);
  }, [searchQuery, speciesFilter, ageFilter, genderFilter, animals]);


  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="stats-panel">
          <Stats data={filteredAnimals} animals={animals}/>
        </div>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 className="title">🐾 Pet Pals</h1>
                  <p className='intro'>PetPals is an intuitive adoption platform that helps you quickly find your perfect furry friend. Browse, filter, and learn about pets available for adoption — making it easier to give every pet a loving home.</p>
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                  <Filters
                    species={speciesFilter}
                    setSpecies={setSpeciesFilter}
                    age={ageFilter}
                    setAge={setAgeFilter}
                    gender={genderFilter}
                    setGender={setGenderFilter}
                  />
                  
                  <Dashboard animals={currentAnimals} />
                  <div className="pagination">
                    <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                      ⬅ Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
                      Next ➡
                    </button>
                  </div>
                </>
              }
            />
            <Route
              path="/animal/:id"
              element={<AnimalDetail animals={animals} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
