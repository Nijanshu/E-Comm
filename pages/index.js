// import React from 'react'
import Carousel from '@/components/carousel'
import Head from 'next/head'

export default function Main() {
  return (<>
   <Head>
        <title>Namazon</title>
        <meta name="description" content="Shop what you love" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
  <Carousel/>
    <div className='relative bg-slate-500 flex flex-col md:flex-row justify-center'>
      <div className='bg-white flex flex-col text-center md:w-[28%] h-[60%] m-[10px]'>
        <h3 className='text-3xl font-bold'>Home Appliances</h3>
        {/* <div></div> */}
        <div className='grid grid-cols-2'>
        
            <a target='_blank' href="https://www.amazon.in/LG-inches-Ultra-Smart-55A2PSA/dp/B0B3WDC8BK/ref=sr_1_4?crid=2Z595EY1PIV4W&keywords=lg+oled&qid=1693657411&sprefix=lg+oled%2Caps%2C299&sr=8-4" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/51Ni90iTiaL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/Hisense-Frost-Free-Refrigerator-Dispenser-RS564N4SBNW/dp/B09CKNXYGQ/ref=sr_1_21_sspa?crid=3SCSI7L4LDMV&keywords=refrigerator&qid=1693657514&sprefix=refrigerator+%2Caps%2C433&sr=8-21-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/41de8jPJRUL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/sspa/click?ie=UTF8&sw-[100%] md:h-[185px] h-[140px] max-w-full max-h-full=MTo3MzU1NTk5MzIzNzY1NjA5OjE2OTM2NTc1NTA6c3BfYXRmOjIwMTE3NzQ5NTcwMDk4OjowOjo&url=%2FPanasonic-Convertible-additional-Purification-CU-NU18YKY5W%2Fdp%2FB0BRJ1973T%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2NUOMNCKJQBKT%26keywords%3Dpanasonic%2Bac%26qid%3D1693657528%26sprefix%3Dpanasonic%2Ba%252Caps%252C330%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/61ZzcguzB1L._AC_UY327_FMwebp_QL65_.jpg" alt="" />
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/LG-Inverter-Fully-Automatic-Washing-FHM1207SDM/dp/B0BMGD9Y2X/ref=sr_1_3?keywords=lg+washing+machine+front+load&qid=1693657587&sprefix=lg+washing+machine+fr%2Caps%2C281&sr=8-3" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/71msFUl565L._AC_UY327_FMwebp_QL65_.jpg" alt="" />
            </a>
        
        </div>
        <button className='bg-black text-[#ec930d] no-underline hover:underline'><a className='text-[#ec930d] no-underline' href="https://www.amazon.in/gp/browse.html?node=5122348031&ref_=nav_em_sbc_tvelec_all_appliance_0_2_9_20" target='_blank'>Explore More</a></button>
      </div>
      <div className="bg-white flex flex-col text-center md:w-[28%] h-[60%] m-[10px]">
        <h3 className='text-3xl font-bold'>Mobile Phones</h3>
        {/* <div></div> */}
        <div className='grid grid-cols-2'>
        
            <a target='_blank' href="https://www.amazon.in/Apple-iPhone-128GB-Space-Black/dp/B0BDJ7P6NG/ref=sr_1_2?crid=2X0TKDON1YQJX&keywords=apple+iphone+14pro&qid=1693657638&sprefix=apple+iphone+14pro%2Caps%2C320&sr=8-2" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/31irWzsdLsL._SY445_SX342_QL70_FMwebp_.jpg" alt="" />
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/sspa/click?ie=UTF8&sw-[100%] md:h-[185px] h-[140px] max-w-full max-h-full=MToxMjY5MzQ4NzYzODY5NjA5OjE2OTM2NTc2OTU6c3BfYXRmOjIwMTI4ODA4NzMzNDk4OjowOjo&url=%2FXiaomi-13-Pro-Ceramic-Professional%2Fdp%2FB0BVMP4NGL%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2U3BBEGGG8ZI2%26keywords%3Dxiaomi%2B13%26qid%3D1693657695%26sprefix%3Dxiaomi%2B1%252Caps%252C380%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/41eB+jXzGsL._SY300_SX300_.jpg" alt="" />
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/sspa/click?ie=UTF8&sw-[100%] md:h-[185px] h-[140px] max-w-full max-h-full=MToyNDgzMzc2MDQzMDE2MDk6MTY5MzY1NzcyMTpzcF9hdGY6MjAxMDkyMTEzNzIyOTg6OjA6Og&url=%2FiQOO-Storage-Snapdragon-Platform-Intelligent%2Fdp%2FB07WHQLR7G%2Fref%3Dsr_1_1_sspa%3Fcrid%3D209H60V20WS68%26keywords%3Diqoo%2B11%26qid%3D1693657721%26sprefix%3Diqoo%2B%252Caps%252C290%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/41+OkeyntgL._SY300_SX300_.jpg" alt="" />
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/sspa/click?ie=UTF8&sw-[100%] md:h-[185px] h-[140px] max-w-full max-h-full=MTo0NjMzNTU0MTExMDg1NjA5OjE2OTM2NTc3NDk6c3BfYXRmOjMwMDAwMjIxNDU1ODAzMjo6MDo6&url=%2FSamsung-Galaxy-Ultra-Green-Storage%2Fdp%2FB0BT9CXXXX%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Ds23%2Bultra%26qid%3D1693657749%26sprefix%3Ds23%2Bul%252Caps%252C309%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/41kyuER2HjL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            </a>
        
        </div>
        <button className='bg-black text-[#ec930d] hover:underline'><a className='text-[#ec930d] no-underline' href="https://www.amazon.in/s/ref=mega_elec_s23_1_1_1_1?rh=i%3Aelectronics%2Cn%3A1389401031&ie=UTF8&bbn=976419031" target='_blank'>Explore More</a></button>

      </div>
      <div className="bg-white flex flex-col text-center md:w-[28%] h-[60%] m-[10px]">
        <h3 className='text-3xl font-bold'>Fashion</h3>
        {/* <div></div> */}
        <div className='grid  grid-cols-2'>
        
            <a target='_blank' href="https://www.amazon.in/s/ref=QAHzEditorial_en_IN_3?pf_rd_r=J9ZEZHZ6SKVES7N4Z8S4&pf_rd_p=74ddd0ab-3943-417e-b57a-a94ca1df198a&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-7&pf_rd_t=&pf_rd_i=1968024031&i=apparel&bbn=1968076031&rh=n%3A1571271031%2Cn%3A1968024031%2Cn%3A1968076031%2Cp_85%3A10440599031%2Cp_n_w-[100%] md:h-[185px] h-[140px] max-w-full max-h-fullt-off-with-tax%3A2665401031%2Cp_89%3AAllen+Solly|Amazon+Brand+-+Inkast+Denim+Co.|Antony+Morato|Arrow|Arrow+New+York|Arrow+Sports|Beat+London+by|CALVINKLEIN|CK+CALVIN+KLEIN|Calvin+Klein|Calvin+Klein+Jeans|GANT|Indian+Terrain|Jack+and+Jones|Killer|Lacoste|Lee|Lee+Cooper|Levi%27s|MUFTI|Marks+and+Spencer|Mode+By+Red+Tape|NEWPORT|Pepe+Jeans|Pepe+Jeans+Innerwear|Pepe+Jeans+London|Peter+England|Red+Tape|Simon+Carter|Spykar|Tommy+Hilfiger|U.S.+POLO+ASSN.|U.S.+POLO+ASSN.+DENIM+CO.|UNITED+COLORS+OF+BENETTON.|US+Polo+Association|USPA|United+Colors+of+Benetton|Wrangler|lindbergh%2Cp_72%3A1318477031&s=apparel&dc&hidden-keywords=-women-woman-girl-boy&pf_rd_i=1968024031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=b1771462-7077-4cab-bbb3-af4bc2e5ff38&pf_rd_r=16745ZAEEDXEG34KZ9H1&pf_rd_s=merchandised-search-6&qid=1685474158&rnid=1318475031&ref=sr_nr_p_72_2&ds=v1%3A1I7naG3H3IKL074B3Wyxnhg0HOdM79Y92PezJyiNfXo" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/BBdeals/Jeans._SS400_QL85_FMpng_.png" alt="" />
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/s/ref=QAHzEditorial_en_IN_1?pf_rd_r=KM1Q97NJ1KBG46G7N1HJ&pf_rd_p=3ef9f2d5-df59-4ab3-ab72-de9153ea3dfd&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-7&pf_rd_t=&pf_rd_i=1953602031&i=apparel&bbn=1968255031&rh=n%3A1571271031%2Cn%3A1953602031%2Cn%3A1968253031%2Cn%3A1968255031%2Cp_85%3A10440599031%2Cp_n_specials_match%3A21618256031%2Cp_n_w-[100%] md:h-[185px] h-[140px] max-w-full max-h-fullt-off-with-tax%3A27060456031%2Cp_89%3AAurelia%7CBIBA%7CIndya%7CJanasya%7CMax%7CSoch%7CW+for+Woman%7Canubhutee%7Cglobal+desi%2Cp_n_deal_type%3A26921224031&s=apparel&dc&S=APPAREL&pf_rd_i=1953602031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=3d00f62d-353a-42a6-9c8d-914a73c92e25&pf_rd_r=QP7BJXJYR7X3SP03WNYF&pf_rd_s=mobile-hybrid-7&pf_rd_t=30901&qid=1691572796&ref=sr_ex_p_72_0&ds=v1%3ABR51PgHhp2K94USkpm6aj1swMxRjws9OHOQ7K%2BRj6Eg" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/G/31/img23/WA/August/ART/BBD/KURTA-BIBA._SS400_QL85_FMpng_.png" alt="" />
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/s/ref=QA6up10Expander_en_IN_2?pf_rd_r=5H5FV1X4Z459SME9RP4J&pf_rd_p=77810f46-1944-4d56-a9e3-12ea5410ccc2&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-13&pf_rd_t=&pf_rd_i=9361420031&bbn=89389256031&rh=n%3A89389256031%2Cp_85%3A10440599031&s=apparel&hidden-keywords=-B07QRB6XQV+-B07QN1RMMB+-B07QQ8QYZQ+-B07QL3FFV3" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/G/31/img2020/img21/kids/KidsCarnival/Sept2023/Page/revised/Allen_Solly_Jr-953x1439_1693489660678_1._SX846_QL85_FMpng_.png" alt="" />
            </a>
        
        
        
            <a target='_blank' href="https://www.amazon.in/s/ref=QAHzEditorial_en_IN_2?pf_rd_r=7K9ZS84P52BKHAYDZ4M3&pf_rd_p=af3a555b-5415-46fa-812b-0ca317ddf165&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-6&pf_rd_t=&pf_rd_i=1983518031&i=shoes&bbn=1983518031&rh=n%3A1983518031%2Cp_n_feature_nineteen_browse-bin%3A11301363031%2Cp_89%3APuma&s=shoes&dc&qid=1681034803&rnid=3837712031&ref=sr_nr_p_89_12&ds=v1%3AOeRhZn4pD6sD9gk%2FOVfSDnmfUL8aTssLDqnY4pL2Kok" className='m-[10px] h-fit flex justify-center hover:border-2 hover:border-blue-300'>
            <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Coop/AF/Puma_65._SS400_QL85_FMpng_.png" alt="" />
            </a>
        
        </div>
        <button className='bg-black text-[#ec930d] hover:underline'><a className='text-[#ec930d] no-underline' href="https://www.amazon.in/b?ie=UTF8&node=6648217031" target='_blank'>Explore More</a></button>

      </div>
      </div>

    
    <div className='bg-white flex flex-col m-[10px] w-[97%] text-left'>
      <h3 className='md:text-3xl font-bold'> More Items  &nbsp; &nbsp;<a href="" className='float-right text-[#ec930d] no-underline hover:underline'>see more...</a>&nbsp;</h3> 
       {/* <a target='_blank' href="https://www.amazon.in/gp/history?pd_rd_w=ztsFW&content-id=amzn1.sym.22a42d01-0089-4fec-a28b-ec7a361d085f%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=22a42d01-0089-4fec-a28b-ec7a361d085f&pf_rd_r=SE7WJV7R5PB7V3ABSXS6&pd_rd_wg=EkajP&pd_rd_r=9b489cd0-c7f5-4557-8eda-d71f96f26e76"><h6>more</h6></a> */}
  
      <div className="m-[10px] h-fit md:flex grid grid-cols-2 justify-center  ">
        <a className='mr-[10px] hover:border-2 hover:border-blue-300' target='_blank' href="https://www.amazon.in/SK-Expertise-Wall-Mounted-Unit/dp/B0C1TST1LG/?_encoding=UTF8&pd_rd_w=SbbC2&content-id=amzn1.sym.22a42d01-0089-4fec-a28b-ec7a361d085f%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=22a42d01-0089-4fec-a28b-ec7a361d085f&pf_rd_r=NET271PED2DPWXTKCYRF&pd_rd_wg=l6tHd&pd_rd_r=91ac5306-5c61-4a59-85a1-96b6cb320f4f&ref_=pd_gw_ci_mcx_mr_hp_d">
          <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/612HL4NuWOL._AC_SY200_.jpg" alt="" />
        </a>
        <a className='mr-[10px] hover:border-2 hover:border-blue-300' target='_blank' href="https://www.amazon.in/Thickness-Diameter-Suitable-Basketball-Outdoors/dp/B08XXVCZCB/?_encoding=UTF8&pd_rd_w=SbbC2&content-id=amzn1.sym.22a42d01-0089-4fec-a28b-ec7a361d085f%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=22a42d01-0089-4fec-a28b-ec7a361d085f&pf_rd_r=NET271PED2DPWXTKCYRF&pd_rd_wg=l6tHd&pd_rd_r=91ac5306-5c61-4a59-85a1-96b6cb320f4f&ref_=pd_gw_ci_mcx_mr_hp_d">
          <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/615pe2mpm4L._AC_SY200_.jpg" alt="" />
        </a>
        <a className='mr-[10px] hover:border-2 hover:border-blue-300' target='_blank' href="https://www.amazon.in/Hindware-Appliances-Efficient-Delivery-aerodynamic/dp/B0BTT78K8J/?_encoding=UTF8&pd_rd_w=SbbC2&content-id=amzn1.sym.22a42d01-0089-4fec-a28b-ec7a361d085f%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=22a42d01-0089-4fec-a28b-ec7a361d085f&pf_rd_r=NET271PED2DPWXTKCYRF&pd_rd_wg=l6tHd&pd_rd_r=91ac5306-5c61-4a59-85a1-96b6cb320f4f&ref_=pd_gw_ci_mcx_mr_hp_d">
          <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/51a3BQKSl-L._AC_SY200_.jpg" alt="" />
        </a>
        <a className='mr-[10px] hover:border-2 hover:border-blue-300' target='_blank' href="https://www.amazon.in/Minar-Copper-Glass-Lid-Stainless/dp/B079W499XQ/?_encoding=UTF8&pd_rd_w=SbbC2&content-id=amzn1.sym.22a42d01-0089-4fec-a28b-ec7a361d085f%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=22a42d01-0089-4fec-a28b-ec7a361d085f&pf_rd_r=NET271PED2DPWXTKCYRF&pd_rd_wg=l6tHd&pd_rd_r=91ac5306-5c61-4a59-85a1-96b6cb320f4f&ref_=pd_gw_ci_mcx_mr_hp_d">
          <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/81Rq2TdXCwL._AC_SY200_.jpg" alt="" />
        </a>
        <a className='mr-[10px] hover:border-2 hover:border-blue-300' target='_blank' href="https://www.amazon.in/Kent-TrueMix-16064-750-White/dp/B08DN23QCX/ref=pd_rhf_d_gw_s_pd_sbs_rvi_sccl_1_3/261-8683925-9262241?pd_rd_w=322eP&content-id=amzn1.sym.f2f99b52-a5ca-432b-8bfe-0d72feb3d1ba&pf_rd_p=f2f99b52-a5ca-432b-8bfe-0d72feb3d1ba&pf_rd_r=XJZNAEZW4RFT39W3RV76&pd_rd_wg=lwADA&pd_rd_r=5f3b2ed3-d185-4a23-b859-1d359ed1c1ec&pd_rd_i=B08DN23QCX&psc=1">
          <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/71HtBzykukL._AC_SY200_.jpg" alt="" />
        </a>
        <a className='mr-[10px] hover:border-2 hover:border-blue-300' target='_blank' href="https://www.amazon.in/Ganesh-Stainless-Bold-Knife-Vegetable/dp/B0C818JGFZ/?_encoding=UTF8&pd_rd_w=SbbC2&content-id=amzn1.sym.22a42d01-0089-4fec-a28b-ec7a361d085f%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=22a42d01-0089-4fec-a28b-ec7a361d085f&pf_rd_r=NET271PED2DPWXTKCYRF&pd_rd_wg=l6tHd&pd_rd_r=91ac5306-5c61-4a59-85a1-96b6cb320f4f&ref_=pd_gw_ci_mcx_mr_hp_d">
          <img className='w-[100%] md:h-[185px] h-[140px] max-w-full max-h-full' src="https://m.media-amazon.com/images/I/51kW4+8aztL._AC_SY200_.jpg" alt="" />
        </a>
    </div>
    
    </div>
    </>
  )
}
