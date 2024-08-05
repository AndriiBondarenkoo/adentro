import Image from "next/image";

/*** Hero ***/
export default function Hero() {
  return (
    <section className='hero relative pt-[80px] pb-[80px] md:pt-[114px] md:pb-[110px]'>
      <div className="container flex flex-col items-center text-center">
        <h1 className='text-[36px] md:text-[62px] xl:text-[92px] font-medium leading-[1.15] mb-[20px] max-w-[1000px]'>
          Efficiency comes with <b>automation</b>
        </h1>

        <div className="hero-description box-content text-sm lg:text-base leading-[1.625] max-w-[870px]">
          <p>In today&apos;s dynamic digital landscape, efficient security operations are crucial for organizational success and resilience. Cutting-edge automation transforms compliance governance and risk assessment.</p>
        </div>

        <div className="button-group gorup-label flex flex-col gap-y-[12px] justify-center items-center mt-[25px] md:mt-[36px]">
          <a href="#contact" className='text-base md:text-[18px] flex items-center justify-center bg-[#7774AA] text-white min-w-[180px] md:min-w-[199px] min-h-[50px] md:min-h-[55px] rounded transition-all hover:shadow-lg'>
            Get started
          </a>

          <div className="under-button flex align-center gap-x-[6px]">
            <span className='text-[13px] md:text-sm font-medium'>Pushing the limits since 2013</span>
            <Image src="/icon-flag.svg" alt="Adentro" width={18} height={14} />
          </div>
        </div>
      </div>
    </section>
  )
}
