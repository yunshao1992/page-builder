import React, { useRef, useEffect } from 'react'
import Wrap from '../../utils/wrap'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

function Banner({ bannerList, height, onClick }) {

  const banner = useRef(null)

  useEffect(() => {
    new Swiper(banner.current, {
      loop: true,
      autoplay: {
        delay: 3000
      },
      navigation: false
    })
  }, [])

  return (
    <div ref={banner} onClick={onClick} style={{overflow: 'hidden'}}>
      <div className="swiper-wrapper" >
        {bannerList.map((item, index) => (
          <div key={index} className="swiper-slide">
            <div style={{
              height: height || '150px',
              background: `url(${item.imgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>

            </div>
          </div>
        ))}
      </div>
      <div className='swiper-pagination'></div>
    </div>
  )
}

export default Banner