import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    console.log(query);

    const searchHandle = () => {
      navigate(`/search/${query}`)
    }

  return (
    <div className='pt-14'>
      <div className='bg-white shadow-md flex h-14 rounded-md'>
        <div className='flex fle items-center px-5 text-gray'>
            <LocationOnIcon />
            <input 
                className='outline-none w-full' 
                type='text' 
                placeholder='Destination' 
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
        <div 
            className='bg-blue w-20 cursor-pointer rounded-r-md flex text-white ml-auto justify-center items-center'
            onClick={searchHandle}
        >
            <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
