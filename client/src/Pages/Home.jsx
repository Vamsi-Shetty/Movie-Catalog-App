import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Movie from '../Components/Movie';

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);

  const baseURL = `https://movie-catalog-app.onrender.com/api/v1`

  useEffect(() => {
    const fetchData =async  () => {
      
      try{
        const res = await axios.get(`${baseURL}/movies`);
        if(res) {
          setResults(res.data);
          setIsLoading(false);
        }
        
        console.log(results)
      }
      catch(err) {
        console.log("error while fetching data", err);
      }
      console.log("first", results)
    }
    fetchData();
  }, [isLoading]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: e.target.elements.query.value });
  };

  return (
    <div>
      <div className='flex flex-row justify-center items-center md:h-auto'>
        <form className='flex ' onSubmit={handleSearch}>
          <input 
          type="search" 
          className="border-2 my-2 p-1 rounded-md mr-3"
          name="query" 
          defaultValue={query}
          placeholder='Enter movie name...'
          />
          <input className='border-2 my-2 p-1 rounded-md  bg-black text-white' type="submit" value="Search"/>
        </form>
      </div>
      <div className='flex flex-wrap gap-6 mx-16 justify-around'>
        {isLoading ? 
        <div className='max-sm:text-center mt-14 text-black font-black'>
          Loading...
          </div>: 
          results?.map((movie) => {
            return <Movie key={movie.title} movie={movie}/>
          })}
      </div>
    </div>
  )
}

export default Home