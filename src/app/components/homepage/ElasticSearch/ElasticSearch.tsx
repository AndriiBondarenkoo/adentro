import Image from "next/image";

export default function ElasticSearch() {
  return (
    <section className='elastic-search py-[50px] lg:py-[80px] relative overflow-x-hidden'>
      <div className="container">
        <div className="heading mb-[30px] md:mb-[40px] lg:mb-[56px] text-center">
          <h2 className="title-l mb-[10px]">Elastic Search and LLM</h2>
          <div className="sub-title relative text-[22px] md:text-[28px] lg:text-[36px] xxl:text-[48px] font-light">— a powerful combination</div>
        </div>

        <div className="description text-[18px] md:text-[23px] xxl:text-[26px] leading-[1.3] xxl:font-medium max-w-[738px] mb-[40px] md:mb-[50px] lg:mb-[75px]">Elastic Search's robust data indexing and search capabilities combined with the analytical power of Large Language Models (LLM) offer unparalleled insights into your security data. This combination allows for:</div>

        <div className="benefits-layout grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] xxl:gap-x-[44px] gap-y-[30px]">
          <div className="benefit-item flex flex-col gap-y-[15px] xl:gap-y-[25px] py-[25px] md:py-[31px] px-[20px] md:px-[29px] rounded-[3px] border border-[#1A1365] border-opacity-35 bg-white">
            <span className='count text-[24px] font-medium'>1</span>
            <div className="title font-medium text-[22px] leading-[1.36]">Real-Time Threat Detection</div>
            <div className="description text-sm md:text-base leading-[1.875]">Quickly identify and respond to security incidents with real-time data analysis.</div>
          </div>

          <div className="benefit-item flex flex-col gap-y-[15px] xl:gap-y-[25px] py-[25px] md:py-[31px] px-[20px] md:px-[29px] rounded-[3px] border border-[#1A1365] border-opacity-35 bg-white">
            <span className='count text-[24px] font-medium'>2</span>
            <div className="title font-medium text-[22px] leading-[1.36]">Enhanced Data Interpretation</div>
            <div className="description text-sm md:text-base leading-[1.875]">LLMs provide deep understanding and context, making sense of complex data patterns and correlations.</div>
          </div>

          <div className="benefit-item flex flex-col gap-y-[15px] xl:gap-y-[25px] py-[25px] md:py-[31px] px-[20px] md:px-[29px]rounded-[3px] border border-[#1A1365] border-opacity-35 bg-white">
            <span className='count text-[24px] font-medium'>3</span>
            <div className="title font-medium text-[22px] leading-[1.36]">Scalable Solutions</div>
            <div className="description text-sm md:text-base leading-[1.875]">Both Elastic Search and LLMs are designed to scale with your business, ensuring consistent performance as your data grows.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
