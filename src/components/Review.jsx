import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Mousewheel, Pagination } from 'swiper/modules';
import { db}  from '../firebase/Firebase'
import { collection, getDocs } from "firebase/firestore";
import ReviewPreview from './ReviewPreview';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const Review = () => {
  const [reviews, setReviews] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Reviews")); 
        console.log("DB Read...");
  
        const fetchedReviews = querySnapshot.docs.map((doc) => ({ ...doc.data() })); 
        setReviews(fetchedReviews);
        console.log(fetchedReviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  const slidesPerView = window.innerWidth < 768 ? 1 : 3;

  return (
    <div id="review" className='bg-hero-pattern h-auto mt-6 bg-[#F8F8F8] p-5'>  
        <h1 className='text-2xl text-blue font-bold text-center mb-5'>Review</h1>
        <div>
          <Swiper
              slidesPerView={slidesPerView}
              grid={{
              rows: 1,
              }}
              spaceBetween={50}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
              clickable: true,
              }}
              mousewheel={false}
              modules={[Grid, Autoplay, Pagination, Mousewheel]}
              className="mySwiper"
          >
            {reviews.map((Obj, index) =>
                  <SwiperSlide key={index}>
                      <ReviewPreview name={Obj.name} img={Obj.img} desc={Obj.desc} />
                  </SwiperSlide>
            )}
          </Swiper>
        </div>
    </div>
  )
}

export default Review
