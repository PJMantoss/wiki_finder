import { useState } from 'react';
import Footer from './Footer';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async e => {
    e.preventDefault();
    if(search === ' ') return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&
    prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

    const response = await fetch(endpoint);

    if(!response.ok){
      throw Error(response.statusText);
    }

    const resultJSON = await response.json();
    console.log(resultJSON);
    setResults(resultJSON.query.search);
    setSearchInfo(resultJSON.query.searchinfo);
  
  };

  return (
    <div className='App'>
      <header>
        <h1>Wiki Finder</h1>
        <form className='searchBox'>
          <input 
            type='search' 
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='What are you searching?' 
          />
          <input 
            type='submit' 
            value='Search' 
            onClick={handleSearch} 
            id='searchBtn'
          />
        </form>
        {
          (searchInfo.totalhits) ? 
          <p className='searchResults'>Search Results: {searchInfo.totalhits}</p> : ''
        }
      </header>
      <div className='results'>
        {results.map(result => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`
          return(
            <div className='result' key={result.pageid}>
              <h3>{result.title}</h3>
              <p dangerouslySetInnerHTML={{__html: result.snippet}}></p>
              <a 
                href={url} 
                target='_blank' 
                rel='noreferrer'
              >Read more</a>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
