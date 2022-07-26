import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Wiki Finder</h1>
        <form className='searchBox'>
          <input type='search' placeholder='What are you searching?' />
        </form>
        <p className='searchResults'>Search: 10</p>
      </header>
      <div className='results'>
        <div className='result'>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
