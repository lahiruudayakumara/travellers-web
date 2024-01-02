import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Mousewheel, Pagination } from 'swiper/modules';
import DestinationPreview from './DestinationPreview';
import { useEffect, useState } from 'react';
import { db } from '../firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const Destination = () => {
    const [destination, setDestination] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "destination")); 
            console.log("DB Read...");
      
            const fetchedReviews = querySnapshot.docs.map((doc) => ({ ...doc.data() })); 
            setDestination(fetchedReviews);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []);

    const slidesPerView = window.innerWidth < 768 ? 1 : 3;



  return (
    <div id='destination' className='px-8 md:px-40 h-auto'>   
        <h1 className='text-2xl text-blue font-bold'>Top Destinations</h1>
        <div className='flex justify-between items-center mt-8'>
        <Swiper
            slidesPerView={slidesPerView}
            grid={{
            rows: 1,
            }}
            spaceBetween={50}
            pagination={{
            clickable: true,
            }}
            mousewheel={true}
            modules={[Grid, Pagination, Mousewheel]}
            className="mySwiper"
        >
          {destination.map((Obj, index)=>
                <SwiperSlide key={index}>
                    <DestinationPreview destination={Obj}  />
                </SwiperSlide>
          )}
        </Swiper>             
        </div>
    </div>
  )
}

export default Destination
