// src/components/Filters.jsx
function Filters({ species, setSpecies, age, setAge, gender, setGender }) {
  return (
    <div className="filters">
      <label className="filters-label">Filter by species:</label>
      <select
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        className="filters-select"
      >
        <option value="All">All</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Rabbit">Rabbit</option>
        <option value="Small & Furry">Small & Furry</option>
      </select>

      <label className="filters-label">Filter by age:</label>
      <select
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="filters-select"
      >
        <option value="All">All</option>
        <option value="Baby">Baby</option>
        <option value="Young">Young</option>
        <option value="Adult">Adult</option>
        <option value="Senior">Senior</option>
      </select>

      <label className="filters-label">Filter by gender:</label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="filters-select"
      >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
}

export default Filters;
