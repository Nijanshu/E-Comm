import React from 'react'

export default function Navex() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-[#25282a]">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto flex mb-lg-0">
        
        <li className="nav-item mb-2">
        <a className="no-underline md:text-xl md:px-3 visible hover:text-yellow-200 text-[#fbbe06]" href="#" target="_blank">Home</a>
        </li>
        <li className="nav-item mb-2">
          <a className="no-underline md:text-xl md:px-3 visible hover:text-yellow-200 text-[#fbbe06] " href="https://www.amazon.in/gp/sva/dashboard?ref_=nav_cs_apay" target='_blank'>Namazon Pay</a>
        </li>
        <li className="nav-item mb-2">
          <a className="no-underline md:text-xl md:px-3 visible hover:text-yellow-200 text-[#fbbe06] " href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav" target='_blank'>MiniTV</a>
        </li>
        <li className="nav-item mb-2">
          <a className="no-underline md:text-xl md:px-3 visible hover:text-yellow-200 text-[#fbbe06]" href="https://www.amazon.in/gcx/Gifts-for-Everyone/gfhz/?ref_=nav_cs_giftfinder" target='_blank'>Gift Ideas</a>
        </li>
        <li className="nav-item mb-2">
          <a className="no-underline md:text-xl md:px-3 visible hover:text-yellow-200 text-[#fbbe06]" href="https://www.amazon.in/b/?ie=UTF8&node=12497409031&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_1ixde7q5ka_b&adgrpid=97630499205&hvpone=&hvptwo=&hvadid=454265532644&hvpos=&hvnetw=g&hvrand=122790567220551431&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9298429&hvtargid=kwd-10117741&hydadcr=28483_2162369" target='_blank'>Refurbished</a>
        </li>
        <li className="nav-item mb-2" id='lnk'>
          <a className="no-underline md:text-xl md:px-3 visible hover:text-yellow-200 text-[#fbbe06]" href="https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3" target='_blank'>Sell</a>
        </li>
        
          <li className=" nav-item dropdown mb-2">
  <a className=" visible no-underline md:text-xl md:px-3 dropdown-toggle hover:text-yellow-200 text-[#fbbe06]" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Explore
  </a>
  <ul className="dropdown-menu visible">
          <h5>More</h5>
            <li><a className="dropdown-item" href="https://www.amazon.in/gp/browse.html?node=976419031&ref_=nav_em_sbc_tvelec_all_elec_0_2_9_13" target='_blank'>Electronics</a></li>
            <li><a className="dropdown-item" href="https://www.amazon.in/gp/browse.html?node=14156834031&ref_=nav_em__shopall_catpage_0_2_2_9" target='_blank'>Echo and Alexa</a></li>
            <li><a className="dropdown-item" href="https://www.amazon.in/gp/browse.html?node=9840097031&ref_=nav_em_sbc_k_allk_0_2_4_8" target='_blank'> Kindle e-Books</a></li>
            <li><a className="dropdown-item" href="https://www.primevideo.com/region/eu/offers/nonprimehomepage/ref=atv_sso_std" target='_blank'>Prime Video</a></li>
            <li><a className="dropdown-item" href="http://www.amazon.in/music/prime?ref_=nav_em_dmm_in_nav_pc_apm_mlp_0_2_7_2" target='_blank'>Prime Music</a></li>
            <li><a className="dropdown-item" href="https://www.amazon.in/gp/browse.html?node=17941593031&ref_=nav_em_adbl_nav_sl_link2_0_2_5_3" target='_blank'>Audible</a></li>
            <li><hr className="dropdown-divider"/><h5>Namazon Pay</h5></li>
            <li><a className="dropdown-item" href="https://www.amazon.in/gp/browse.html?node=3704982031&ref_=nav_em_sbc_gc_all_0_2_19_2" target='_blank'>Gift Cards</a></li>
            <li><a className="dropdown-item" href="https://www.amazon.in/b?ie=UTF8&node=18383641031" target='_blank'>Travel</a></li>
            <li><a className="dropdown-item" href="https://www.amazon.in/hfc/mobileRecharge" target='_blank'>Mobile Recharge</a></li>
          </ul>
        </li>
        <li className="nav-item mb-2" id='rgt'>
          <a className="no-underline md:text-xl md:px-3  visible hover:text-yellow-200 text-[#fbbe06]"  href="https://www.amazon.in/amazonprime/?_encoding=UTF8&ref_=nav_swm_IN_PG_SWM_NP&pf_rd_p=735e31a0-2d9b-4d0c-8c34-330b2c478f98&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=NSFWW1HT61ZZJ7MSRSVN" target='_blank'>Try Prime</a>
        </li>
        {/* <li className="nav-item">
          <a className="no-underline md:text-xl md:px-3 visible hover:text-yellow-200 text-[#fbbe06] disabled" aria-disabled="true">Disabled</a>
        </li> */}

      </ul>
      
    </div>
    
  </div>
  
</nav>
  )
}
