import Image from "next/image";

export default function Expertise() {
  return (
    <section className='expertise py-[50px] lg:py-[80px]'>
      <div className="container">
        <h3 className="title-m mb-[20px]">Our expertise in automation</h3>
        <div className="expertise-description max-w-[522px] text-sm ld:text-base leading-[1.875]">We specialize in developing sophisticated automation frameworks using the latest GenAI technologies, seamlessly integrating Splunk and Elastic.</div>

        <div className="expertise-bottom pl-[30px] md:pl-[80px] lg:pl-[140px] xl:pl-[217px] mt-[40px] md:mt-[70px] xl:mt-[83px]">

          <div className="partner-logos flex flex-col md:flex-row md:items-center justify-between flex-wrap gap-x-[40px] xl:gap-x-[73px] gap-y-[30px]">
            <div className="item max-w-[150px] lg:max-w-[190px] xxl:max-w-[270px]">
              <Image src="/expertise/logo-1.png" alt="image"
                className="object-contain object-center"
                width={224} height={76}
              />
            </div>
            <div className="item max-w-[150px] lg:max-w-[190px] xxl:max-w-[270px]">
              <Image src="/expertise/logo-2.png" alt="image"
                className="object-contain object-center"
                width={226} height={66}
              />
            </div>
            <div className="item max-w-[150px] lg:max-w-[190px] xxl:max-w-[270px]">
              <Image src="/expertise/logo-3.png" alt="image"
                className="object-contain object-center"
                width={269} height={42}
              />
            </div>
            <div className="item max-w-[150px] lg:max-w-[190px] xxl:max-w-[270px]">
              <Image src="/expertise/logo-4.png" alt="image"
                className="object-contain object-center"
                width={118} height={71}
              />
            </div>
          </div>

          <div className="partner-description max-w-[522px] text-sm ld:text-base leading-[1.875] mt-[40px] md:mt-[70px] xl:mt-[83px]">
            Our solutions empower businesses to streamline their security operations, enhance efficiency, and ensure robust compliance with ever-evolving regulatory requirements.
          </div>
        </div>
      </div>
    </section>
  )
}
