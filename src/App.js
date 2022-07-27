import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async e => {
    e.preventDefault();
    if(search === '') return;

    const endpoint = ``;
  };

  return (
    <div className='App'>
      <header>
        <h1>Wiki Finder</h1>
        <form className='searchBox' onSubmit={handleSearch}>
          <input 
            type='search' 
            value={search}
            onChange={e => e.target.value}
            placeholder='What are you searching?' 
          />
        </form>
        <p className='searchResults'>Search Results: 0</p>
      </header>
      <div className='results'>
        <div className='result'>
          <h3>Title</h3>
          <p>lorem ipsum dolo si ta me lorem ipsum dolo si ta me lorem ipsum dolo si ta me</p>
          <a href='#'>Read more</a>
        </div>
      </div>
    </div>
  );
}

export default App;
