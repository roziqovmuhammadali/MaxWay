// // import React from "react";
// // import Slider from "react-slick";

// // function AutoPlay() {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     speed: 2000,
// //     autoplaySpeed: 2000,
// //     cssEase: "linear"
// //   };
// //   return (
// //     <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
// //       <Slider {...settings}>
// //         <div className="flex h-[30px] w-full items-center rounded-lg">
// //           <div className="h-full text-black rounded-lg w-[240px]">
// //             <p className="text-[15px] font-bold">🎉 Aksiya 2+1</p>
// //           </div>
// //         </div>
// //         <div className="flex h-[30px] w-full items-center rounded-lg">
// //           <div className="h-full rounded-lg w-[240px]">
// //             <p className="text-[15px] font-bold">🍟🍔🥤Maxi BOX</p>
// //           </div>
// //         </div>
// //         <div className="flex h-[30px] w-full items-center rounded-lg">
// //           <div className="h-full rounded-lg w-[240px]">
// //             <p className="text-[15px] font-bold">🥪Klab-Sendvich</p>
// //           </div>
// //         </div>
// //         <div className="flex h-[30px] w-full items-center rounded-lg">
// //           <div className="h-full rounded-lg w-[120px]">
// //             <p className="text-[15px] font-bold">🌯Lavash</p>
// //           </div>
// //         </div>
// //         <div className="flex h-[30px] w-full items-center rounded-lg">
// //           <div className="h-full rounded-lg w-[120px]">
// //             <p className="text-[15px] font-bold">🌮Shaurma</p>
// //           </div>
// //         </div>
// //         <div className="flex h-[30px] w-full items-center">
// //           <div className="h-full rounded-lg w-[120px]">
// //             <p className="text-[15px] font-bold">🫔Panini</p>
// //           </div>
// //         </div>
// //         <div className="flex h-[30px] w-full items-center">
// //           <div className="h-full rounded-lg w-[120px]">
// //             <p className="text-[15px] font-bold">🍔Burger</p>
// //           </div>
// //         </div>
// //         <div className="flex h-[30px] w-full items-center">
// //           <div className="h-full rounded-lg w-[120px]">
// //             <p className="text-[15px] font-bold">🍱Donar kebab</p>
// //           </div>
// //         </div>
// //       </Slider>
// //     </div>
// //   );
// // }
// // // function AutoPlay() {
// // //   const settings = {
// // //     dots: true,
// // //     infinite: true,
// // //     slidesToShow: 3,
// // //     slidesToScroll: 1,
// // //     autoplay: true,
// // //     speed: 2000,
// // //     autoplaySpeed: 2000,
// // //     cssEase: "linear"
// // //   };
// // //   return (
// // //     <Slider {...settings}>
// // //       <div className="flex h-[30px] w-full items-center rounded-lg">
// // //         <div className="h-full text-black rounded-lg w-[240px]">
// // //           <p className="text-[15px] font-bold">🎉 Aksiya 2+1</p>
// // //         </div>
// // //       </div>
// // //       <div className="flex h-[30px] w-full items-center rounded-lg">
// // //         <div className="h-full rounded-lg w-[240px]">
// // //           <p className="text-[15px] font-bold">🍟🍔🥤Maxi BOX</p>
// // //         </div>
// // //       </div>
// // //       <div className="flex h-[30px] w-full items-center rounded-lg">
// // //         <div className="h-full rounded-lg w-[240px]">
// // //           <p className="text-[15px] font-bold">🥪Klab-Sendvich</p>
// // //         </div>
// // //       </div>
// // //       <div className="flex h-[30px] w-full items-center rounded-lg">
// // //         <div className="h-full rounded-lg w-[120px]">
// // //           <p className="text-[15px] font-bold">🌯Lavash</p>
// // //         </div>
// // //       </div>
// // //       <div className="flex h-[30px] w-full items-center rounded-lg">
// // //         <div className="h-full rounded-lg w-[120px]">
// // //           <p className="text-[15px] font-bold">🌮Shaurma</p>
// // //         </div>
// // //       </div>
// // //       <div className="flex h-[30px] w-full items-center">
// // //         <div className="h-full rounded-lg w-[120px]">
// // //           <p className="text-[15px] font-bold">🫔Panini</p>
// // //         </div>
// // //       </div>
// // //       <div className="flex h-[30px] w-full items-center">
// // //         <div className="h-full rounded-lg w-[120px]">
// // //           <p className="text-[15px] font-bold">🍔Burger</p>
// // //         </div>
// // //       </div>
// // //       <div className="flex h-[30px] w-full items-center">
// // //         <div className="h-full rounded-lg w-[120px]">
// // //           <p className="text-[15px] font-bold">🍱Donar kebab</p>
// // //         </div>
// // //       </div>
// // //     </Slider>
// // //   );
// // // }

// // export default AutoPlay;
// import React from "react";
// import Slider from "react-slick";

// function AdaptiveHeight() {
//   const settings = {
//     className: "",
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true
//   };

//   return (
//     <div className="slider-container bg-black text-white">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//           <p>Hello</p>
//         </div>
//         <div>
//           <h3>3</h3>
//           <p>See ....</p>
//           <p>Height is adaptive</p>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default AdaptiveHeight;
