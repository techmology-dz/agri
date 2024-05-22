import Image from "next/image";

export default function Home() {
  return (
        <section className="home-image flex flex-grow-1 flex-shrink-0 w-full h-svh bg-[url('/assets/images/harvesting-wheat.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="container w-4/5 mx-10 md:mx-20 flex flex-col z-10">
                <div className="max-w-90">
                <h1 className="font-semibold  text-5xl md:text-8xl text-white text-center   md:text-left flex flex-col">
            <span>Innovons</span> 
            <span>pour l &rsquo;agriculture</span>
            <span> de demain.</span>
          </h1>
          <button className="rounded-r-lg rounded-b-lg rounded-l-lg min-w-32 p-3 px-9  my-10 font-semibold text-2xl bg-[#ffd700] text-[#026533] p-25">
            participer
          </button>
                </div>
                <div className="flex flex-wrap mt-4  items-center justify-around gap-10 ">
              <Image
              className=" w-20 md:w-32 h-32"
                src='/assets/images/EU_2x.png'
                alt="logo"
                width={120}
                height={120}
              ></Image>
              <Image
                className=" w-20 md:w-32 "
                src='/assets/images/A_2x.png'
                alt="logo"
                width={120}
                height={120}
              ></Image>
              <Image
                className=" w-20 md:w-32 "
                src='/assets/images/C_2x.png'
                alt="logo"
                width={120}
                height={120}
              ></Image>
              <Image
                className=" w-20 md:w-32 "
                src='/assets/images/GIZ_2x.png'
                alt="logo"
                width={120}
                height={120}
              ></Image>
 


                </div>
            </div>


        </section>
        
      )
}
