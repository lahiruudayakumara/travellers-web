import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { db } from '../firebase/Firebase';
import DestinationPreview from '../components/DestinationPreview';

const Search = () => {
    const {query} = useParams();
    const [destination, setDestination] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "destination")); 
          console.log("DB Read...");
    
          const fetchedReviews = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

          const trimmedQuery = query.trim();
          const lowerCasedQuery = trimmedQuery.toLowerCase();
          
          const searchQuery = fetchedReviews.filter(review => review.name && review.name.toLowerCase().includes(lowerCasedQuery));
          console.log(searchQuery)
          setDestination(searchQuery);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);

  return (
    <div className='min-h-screen p-8 md:px-40 py-6'>
      <h1 className=' text-2xl text-blue mb-4'>Found {destination.length} destinations</h1>
      <div className='flex flex-wrap'>
      {destination.map((Obj, index)=>
                <div key={index}
                  className='w-fit md:w-80 m-2'
                >
                    <DestinationPreview name={Obj.name} img={Obj.img} country={Obj.country} rating={Obj.ratings} />
                </div>
      )}
      </div>
    </div>
  )
}

export default Search
