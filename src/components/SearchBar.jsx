import { Search } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='pt-14'>
      <div className='bg-white shadow-md flex justify-between h-14 rounded-md'>
        <div className='flex items-center px-5 text-gray'>
            <LocationOnIcon />
            <input className='outline-none' type='text' placeholder='Destination' />
        </div>
        <div className='bg-blue w-20 rounded-r-md flex text-white justify-center items-center'>
            <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
