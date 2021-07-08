// import React from "react";
// // import "./Style.css";
// import "../cssComponents/footer.css";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footerStyle bg-black mb-0 pt-5 mt-10 footer">
//         <div className="container m-auto">
//           <div className="flex flex-wrap">
//             {/* 1st part footer */}
//             <div className="firstFooter footer-col">
//               <div className="firstPart1">
//                 <h4 className="text-lg capitalize m-8 font-medium ">
//                   Main Contact
//                 </h4>
//                 <p className="ml-8 tracking-widest text-base">
//                   LOUD Entertainment Parties <br /> booking@loudentparties.com{" "}
//                   <br /> Tel: (917) 468.2276 New York, <br /> NY 10004
//                 </p>
//               </div>
//               <div className="firstPart2">
//                 <h4 className="text-lg capitalize m-8 font-medium ">
//                   Inquiries
//                 </h4>
//                 <p className="ml-8 tracking-widest text-base">
//                   For any inquiries, questions <br /> or commendations, please{" "}
//                   <br /> (917) 468 2276 <br /> of fill out the contact form
//                   above
//                 </p>
//               </div>
//             </div>
//             {/* 2nd part footer */}
//             <div class="secondFooter footer-col">
//               <h4 className="text-lg capitalize m-8 font-medium ">Services</h4>
//               <ul className="ulLi">
//                 <li>
//                   <a
//                     className="text-base capitalize no-underline font-thin block"
//                     href="#services"
//                   >
//                     EVENT PRODUCTION
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-base capitalize no-underline font-thin block"
//                     href="#services"
//                   >
//                     RENTALS
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-base capitalize no-underline font-thin block"
//                     href="#services"
//                   >
//                     DJ SERVICE
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* 3rd part footer */}
//             <div class="thirdFooter footer-col">
//               <h4 className="text-lg capitalize m-8 font-medium ">Dj Jvee</h4>
//               <ul className="ulLi">
//                 <li>
//                   <a
//                     className="text-base capitalize no-underline font-thin block"
//                     href="/"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-base capitalize no-underline font-thin block"
//                     href="#services"
//                   >
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-base capitalize no-underline font-thin block"
//                     href="#about"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-base capitalize no-underline font-thin block"
//                     href="#contact"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* 4th part footer */}
//             <div class="fourthFooter footer-col">
//               <h4 className="text-lg capitalize m-8 font-medium">Follow us</h4>
//               <ul>
//                 <div class="social-links ml-10">
//                   <a
//                     href="#/"
//                     className="inline-block w-10 h-10 text-center p-1 leading-8"
//                   >
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                   <a
//                     href="#/"
//                     className="inline-block w-10  h-10  text-center pt-1 leading-8"
//                   >
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                   <a
//                     href="#/"
//                     className="inline-block w-10  h-10  text-center p-1 leading-8"
//                   >
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                   <a
//                     href="#/"
//                     className="inline-block w-10  h-10  text-center p-1 leading-8"
//                   >
//                     <i class="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//               </ul>
//             </div>
//           </div>
//           <div>
//             <h5 className="lg:text-center footer-copy pt-10">
//               Copyright 2021 Loudent Parties LLC All Rights Reserved
//             </h5>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import "./Style.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black mb-0 pt-5 mt-10 footer">
        <div className="container m-auto">
          <div className="flex flex-wrap">
            <div className="footer-col">
              <h4 className="text-lg capitalize m-8 font-medium relative">
                Main Contact
              </h4>
              <p className="ml-8 tracking-widest text-base">
                LOUD Entertainment Parties <br /> booking@loudentparties.com{" "}
                <br /> Tel: (917) 468.2276 New York, <br /> NY 10004
              </p>
              <h4 className="text-lg capitalize m-8 font-medium relative">
                Inquiries
              </h4>
              <p className="ml-8 tracking-widest text-base">
                For any inquiries, questions <br /> or commendations, please{" "}
                <br /> (917) 468 2276 <br /> of fill out the contact form above
              </p>
            </div>
            <div class="footer-col">
              <h4 className="text-lg capitalize m-8 font-medium relative">
                Services
              </h4>
              <ul>
                <li>
                  <a
                    className="text-base capitalize no-underline font-thin block"
                    href="#services"
                  >
                    EVENT PRODUCTION
                  </a>
                </li>
                <li>
                  <a
                    className="text-base capitalize no-underline font-thin block"
                    href="#services"
                  >
                    RENTALS
                  </a>
                </li>
                <li>
                  <a
                    className="text-base capitalize no-underline font-thin block"
                    href="#services"
                  >
                    DJ SERVICE
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="text-lg capitalize m-8 font-medium relative">
                Dj Jvee
              </h4>
              <ul>
                <li>
                  <a
                    className="text-base capitalize no-underline font-thin block"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-base capitalize no-underline font-thin block"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-base capitalize no-underline font-thin block"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-base capitalize no-underline font-thin block"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="text-lg capitalize m-8 font-medium relative">
                Follow us
              </h4>
              <ul>
                <div class="social-links ml-10">
                  <a
                    href="#/"
                    className="inline-block w-10 h-10 text-center p-1 leading-8"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#/"
                    className="inline-block w-10  h-10  text-center pt-1 leading-8"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#/"
                    className="inline-block w-10  h-10  text-center p-1 leading-8"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#/"
                    className="inline-block w-10  h-10  text-center p-1 leading-8"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <h5 className="lg:text-center footer-copy pt-10">
              Copyright 2021 Loudent Parties LLC All Rights Reserved
            </h5>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
