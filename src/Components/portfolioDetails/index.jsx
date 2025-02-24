// import React from 'react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/less/pagination';
// // import Swiper from 'swiper/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Navbar from "../Navbar";
// import Footer from '../Footer'

// import './style.css';

// function index() {
//   return (
//     <div>
//       <Navbar />
//       {/* <!-- ======= Breadcrumbs ======= --> */}
//       <section id="breadcrumbs" className="breadcrumbs">
//         <div className="container breadcrumb_heading">
//           <h2>Portfolio Details</h2>
//           <ol>
//             <li><a href="index.html">Home</a></li>
//             <li>Portfolio Details</li>
//           </ol>
//         </div>
//       </section>   {/* <!-- End Breadcrumbs --> */}

//       {/* <!-- ======= Portfolio Details Section ======= --> */}


//       <section id="portfolio-details" className="portfolio-details">
//         <div className="container">

//           <div className="row gy-4">

//             <div className="col-lg-8">
//               <div className="portfolio-details-slider ">
//                 <div className="swiper-wrapper align-items-center">

//                   <Swiper
//                     modules={[Navigation, Pagination, Scrollbar, A11y]}
//                     spaceBetween={50}
//                     slidesPerView={1}
//                     pagination={{ clickable: true }}
//                     onSlideChange={() => console.log('slide change')}
//                     onSwiper={(swiper) => console.log(swiper)}
//                   >
//                     <SwiperSlide >
//                       <div className="swiper-slide ">
//                         <img src={require("../../assets/img/portfolio-details-1.jpg")} alt="" />
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                       <div className="swiper-slide">
//                         <img src={require("../../assets/img/portfolio-details-2.jpg")} alt="" />
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                       <div className="swiper-slide">
//                         <img src={require("../../assets/img/portfolio-details-3.jpg")} alt="" />
//                       </div>
//                     </SwiperSlide>

//                   </Swiper>
//                 </div>
//               </div>
              

//             </div>

//             <div className="col-lg-4">
//               <div className="portfolio-info">
//                 <h3>Project information</h3>
//                 <ul>
//                   <li><strong>Category</strong>: Web design</li>
//                   <li><strong>Client</strong>: ASU Company</li>
//                   <li><strong>Project date</strong>: 01 March, 2020</li>
//                   <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
//                 </ul>
//               </div>
//               <div className="portfolio-description">
//                 <h2>This is an example of portfolio detail</h2>
//                 <p>
//                   Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section> {/*<!-- End Portfolio Details Section --> */}

//       <Footer />
//     </div>
//   )
// }

// export default index
