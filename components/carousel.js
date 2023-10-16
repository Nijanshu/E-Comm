import React from 'react'
import styles from '@/styles/carousel.module.css'

export default function Carousel() {
  return (
    <div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner h-[105px] md:h-[225px] w-[100vw]">
    <div className="w-[100%] carousel-item active ">
      <a href="https://www.amazon.in/gp/browse.html?node=976389031&ref_=nav_em_sbc_books_all_0_2_17_2" target='_blank'><img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" className="h-full w-full" alt="..."/>
    </a>
    </div>

    <div className="carousel-item">
      <a href="https://www.amazon.in/b/?_encoding=UTF8&node=1389401031&ref_=hero1_WLDUber&pd_rd_w=9XX3q&content-id=amzn1.sym.d7b87912-5504-4a9b-939f-3a97efaa2cc9&pf_rd_p=d7b87912-5504-4a9b-939f-3a97efaa2cc9&pf_rd_r=J7R4H808HF0330JBQTVF&pd_rd_wg=xjInp&pd_rd_r=00cad255-9f74-4637-8343-19eebd8a8fd4" target='_blank'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" className="h-full w-full" alt="..."/>
    </a>
    </div>

    <div className="carousel-item">
      <a href="https://www.amazon.in/b?ie=UTF8&node=6648217031" target='_blank'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/sepatf23/unrec/one/upd/WA_WW_3000._CB595840558_.jpg" className="h-full w-full" alt="..."/>
    </a>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
