function SearchBar({ value, onChange }) {
  return (
    
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by pet name, breed, age, or gender..."
      className="search-input"
    /> 
  );
}

export default SearchBar;
