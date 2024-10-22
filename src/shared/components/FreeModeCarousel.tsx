/** Codesandbox
 * {@link https://codesandbox.io/p/devbox/swiper-react-freemode-6psx54}
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const FreeModeCarousel: React.FC<{ data: object }> = ({ data }) => {
  return (
    <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data?.results.map((movie) => (   
          <SwiperSlide>
            <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
          </SwiperSlide>  
        ))}
      </Swiper>
  );
};

export default FreeModeCarousel;
