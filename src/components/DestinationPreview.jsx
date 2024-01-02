import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useDispatch } from 'react-redux';
import { addBookmarks } from '../stores/slices/bookmarksSlice';

const DestinationPreview = ({destination, icon}) => {
    const dispatch = useDispatch();
    
    const addBookMarks = () => {
        dispatch(addBookmarks(destination));
    }
    
  return (
    <div className='bg-white shadow-md rounded-md mb-10'>
        <img 
            src={destination.img}
            alt='place-holder'
            className='rounded-t-md md:h-44 md:w-full'
        />
        <div className='px-5 py-2'>
            <div className='flex justify-between items-center'>
                <h3 className='text-lg text-blue font-bold'>{destination.name}</h3>
                <p className='text-yellow'>{destination.rating}<StarOutlinedIcon  /></p>
            </div>
            <div className='flex justify-between items-center text-blue'>
                <p className='text-brown font-semibold'>{destination.country}</p>
                {icon == true? null :
                <div
                    onClick={addBookMarks} 
                    className='hover:shadow-md hover:rounded-full cursor-pointer p-1'>
                    <BookmarkBorderOutlinedIcon />
                </div> }
            </div>
        </div>
    </div>
  )
}

export default DestinationPreview