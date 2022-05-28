import './styles.css';
const Search = () => {
  return (
    <div className="container base-card search-container ">
      <div className="search-input-container">
        <div className="search-input">
          <input placeholder="Digite sua busca"></input>
        </div>
        <div>
        <button className="btn btn-search">
          <p>BUSCAR</p>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
