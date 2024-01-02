import { useSelector } from "react-redux";
import { userBookmarks } from "../stores/slices/bookmarksSlice";
import DestinationPreview from "../components/DestinationPreview";

const Bookmarks = () => {
  const book = useSelector(userBookmarks);

  return (
    <div className='min-h-screen p-8 md:px-40 py-6'>
      <h1 className=' text-2xl text-blue mb-4'>Your Bookmarks</h1>
      <div className='flex flex-wrap'>
        {book.map((Obj,index) => (
          <div key={index}
          className='w-fit md:w-80 m-2'
        >
          <DestinationPreview destination={Obj} icon={true} />
        </div>
        ))}
      </div>
    </div>
  )
}

export default Bookmarks
