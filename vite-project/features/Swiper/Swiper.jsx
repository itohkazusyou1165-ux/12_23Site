// swiperのなかみを全てここの中に入れる
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSwiper({ images }){
    return (
        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}

 
>
{/* mapで回すこと */}
{images.map((image, index) => (
<SwiperSlide key={index}>
    {/* srcは親コンポーネントの中にある画像指定 */}
  <img src={image.src} alt={image.alt} />
</SwiperSlide>
  ))}
</Swiper>


       );
     }


 
