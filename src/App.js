import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  return (
    <div className='App'>
      <header>
        <h1>Wiki Finder</h1>
        <form className='searchBox'>
          <input type='search' placeholder='What are you searching?' />
        </form>
        <p className='searchResults'>Search Results: 10</p>
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
