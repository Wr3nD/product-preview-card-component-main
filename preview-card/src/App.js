import pictureD from "./images/image-product-desktop.jpg"
import pictureM from "./images/image-product-mobile.jpg"

import { useEffect, useState } from "react";
function App() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 376) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 376) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-screen  flex flex-col justify-center items-center bg-[#f2ebe3]">
      <main className="bg-white w-[350px] md:w-full  md:max-w-screen-md overflow-hidden  mx-auto grid grid-cols-1 md:grid-cols-2 rounded-lg">
        <picture>
          <img src={mobile ? pictureM : pictureD} alt="parfume" className="w-max h-max object-contain " />
        </picture>
        <div className="p-6 md:p-10 flex flex-col">
          <h3 className="text-gray-500 uppercase text-base md:text-lg tracking-[5px] font-Montserrat mb-4 md:mb-6">
            PERFUME
          </h3>
          <h1 className="font-Fraunces text-[#1c232b] text-3xl md:text-5xl mb-4 md:mb-8">
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="text-base md:text-lg mb-6 leading-7 font-Montserrat text-gray-500 ">

            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row text-4xl md:text-4xl font-Fraunces items-center mb-8">

            <span className="text-[#3c8067] ">
              $149.99
            </span>
            <span className="text-sm text-gray-500 ml-6 md:ml-8 font-Montserrat line-through">
              $169.99
            </span>
          </div>
          <button className="bg-[#3c8067] py-4 font-Montserrat text-white rounded-xl hover:bg-[#18352a] flex justify-center items-center ">
            <svg className="mr-3" width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" /></svg> Add to Cart
          </button>
        </div>

      </main >
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Vít Radosta</a>.
      </div>
    </div >
  );
}

export default App;
