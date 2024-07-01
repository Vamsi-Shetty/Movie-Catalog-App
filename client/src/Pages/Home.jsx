import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Movie from '../Components/Movie';

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchItem, setSearchItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 20;

  const baseURL = `https://movie-catalog-app.onrender.com/api/v1`
  const localHost = `http://localhost:3000/api/v1`;

  useEffect(() => {
    const fetchData =async  () => {
      
      try{
        // const res = await axios.get(`${baseURL}/movies?page=${page}&limit=${limit}`);
        const res = await axios.get(`${localHost}/movies`, {
          params: { page, limit, search: query }
        });
        if(res) {
          setResults(res.data.items);
          setTotalPages(res.data.totalPages)
          setIsLoading(false);
        }
      }
      catch(err) {
        console.log("error while fetching data", err);
      }
    }
    fetchData();
  }, [isLoading, page, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ page: 1, limit, search: searchItem });
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <div className='flex flex-row justify-center items-center md:h-auto'>
        <form className='flex ' onSubmit={handleSearch}>
          <input 
          type="search" 
          className="border-2 my-2 p-1 rounded-md mr-3"
          name="query" 
          onChange={e => setSearchItem(e.target.value)}
          defaultValue={query}
          placeholder='Enter movie name...'
          />
          <input className='border-2 my-2 p-1 rounded-md  bg-black text-white' type="submit" value="Search"/>
        </form>
      </div>
      <div className='flex flex-row mt-3  gap-4 justify-center items-center'>
        <button
         className='bg-black text-white border-2 my-2 px-3 rounded-full'
         onClick={handlePrevPage} 
         disabled={page === 1}>
          Back
        </button>
        <span>{` Page ${page} of ${totalPages} `}</span>
        <button
         className='bg-black text-white border-2 my-2 px-3 rounded-full'
         onClick={handleNextPage} 
         disabled={page === totalPages}>
          Next
        </button>
      </div>
      <div className='flex flex-wrap gap-6 m-16 justify-around'>
        {isLoading ? 
        <div className='max-sm:text-center mt-14 text-black font-black'>
          Loading...
          </div>: 
          results?.map((movie) => {
            return <Movie key={movie.movie_url} movie={movie}/>
          })
          }
      </div>
    </div>
  )
}

export default Home