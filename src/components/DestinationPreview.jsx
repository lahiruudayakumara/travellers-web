import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { useDispatch } from 'react-redux';

const DestinationPreview = ({name, img, country, rating}) => {
    const dispatch = useDispatch();
    
  return (
    <div className='bg-white shadow-md rounded-md mb-10'>
        <img 
            src={img}
            alt='place-holder'
            className='rounded-t-md md:h-44 md:w-full'
        />
        <div className='px-5 py-2'>
            <div className='flex justify-between items-center'>
                <h3 className='text-lg text-blue font-bold'>{name}</h3>
                <p className='text-yellow'>{rating}<StarOutlinedIcon  /></p>
            </div>
            <div className='flex justify-between items-center text-blue'>
                <p className='text-brown font-semibold'>{country}</p>
                <div className='hover:shadow-md hover:rounded-full cursor-pointer p-1'>
                    <BookmarkBorderOutlinedIcon />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationPreview