import Image from "next/image";

export default function GenAI() {
  return (
    <section className='gen-ai py-[50px] lg:py-[80px]'>
      <div className="container">
        <div className="heading mb-[30px] md:mb-[40px] lg:mb-[56px] xl:[mb-89px] text-center">
          <h2 className="title-l mb-[10px]">GenAI Modules</h2>
          <div className="sub-title relative text-[22px] md:text-[28px] lg:text-[36px] xxl:text-[48px] font-light">in security and process automation</div>
        </div>

        <div className="description text-[18px] md:text-[23px] xxl:text-[26px] leading-[1.3] xxl:font-medium max-w-[738px] mb-[40px] md:mb-[50px] lg:mb-[60px]">Our GenAI modules are at the forefront of security and process automation, providing innovative solutions tailored to your needs. Key features include:</div>

        <div className="layout relative grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] xl:gap-x-[65px] gap-y-[30px]">
          <div className="item flex flex-col gap-y-[15px] xl:gap-y-[25px] py-[25px] md:py-[31px] px-[20px] md:px-[29px] rounded-[3px] border border-[#1A1365] border-opacity-35 bg-white">
            <span className='icon'>
              <Image src="/genai/icon-1.png" alt="icon"
                className="w-[58px] min-w-[58px] h-[58px]" width="58" height="58"
              />
            </span>
            <div className="title font-medium text-[22px] md:text-[26px] leading-[1.36]">AI-Driven Security Monitoring</div>
            <div className="description text-sm md:text-base leading-[1.875]">Our GenAI modules continuously monitor and analyze network traffic, detecting suspicious activities and potential threats with unprecedented accuracy.</div>
          </div>

          <div className="item flex flex-col gap-y-[15px] xl:gap-y-[25px] py-[25px] md:py-[31px] px-[20px] md:px-[29px] rounded-[3px] border border-[#1A1365] border-opacity-35 bg-white">
            <span className='icon'>
              <Image src="/genai/icon-2.png" alt="icon"
                className="w-[58px] min-w-[58px] h-[58px]" width={58} height={58}
              />
            </span>
            <div className="title font-medium text-[22px] md:text-[26px] leading-[1.36]">Automated Incident Respons</div>
            <div className="description text-sm md:text-base leading-[1.875]">GenAI-powered automation enables rapid incident response, executing predefined actions to mitigate threats and minimize damage.</div>
          </div>

          <div className="item flex flex-col gap-y-[15px] xl:gap-y-[25px] py-[25px] md:py-[31px] px-[20px] md:px-[29px] rounded-[3px] border border-[#1A1365] border-opacity-35 bg-white">
            <span className='icon'>
              <Image src="/genai/icon-3.png" alt="icon"
                className="w-[58px] min-w-[58px] h-[58px]" width={58} height={58}
              />
            </span>
            <div className="title font-medium text-[22px] md:text-[26px] leading-[1.36]">Predictive Analysis</div>
            <div className="description text-sm md:text-base leading-[1.875]">Utilize GenAI to predict potential security breaches and vulnerabilities, allowing proactive measures to strengthen your defenses.</div>
          </div>

          <div className="item flex flex-col gap-y-[15px] xl:gap-y-[25px] py-[25px] md:py-[31px] px-[20px] md:px-[29px] rounded-[3px] border border-[#1A1365] border-opacity-35 bg-white">
            <span className='icon'>
              <Image src="/genai/icon-4.png" alt="icon"
                className="w-[58px] min-w-[58px] h-[58px]" width={58} height={58}
              />
            </span>
            <div className="title font-medium text-[22px] md:text-[26px] leading-[1.36]">Process Optimization</div>
            <div className="description text-sm md:text-base leading-[1.875]">Automate routine processes and workflows, freeing up valuable resources and enhancing overall operational efficiency.</div>
          </div>

          <div className="item flex flex-col gap-y-[15px] xl:gap-y-[25px] py-[25px] md:py-[31px] px-[20px] md:px-[29px] rounded-[3px] border border-[#1A1365] border-opacity-35 bg-white">
            <span className='icon'>
              <Image src="/genai/icon-5.png" alt="icon"
                className="w-[58px] min-w-[58px] h-[58px]" width={58} height={58}
              />
            </span>
            <div className="title font-medium text-[22px] md:text-[26px] leading-[1.36]">Dynamic Threat Intelligence</div>
            <div className="description text-sm md:text-base leading-[1.875]">GenAI modules aggregate and analyze threat intelligence from multiple sources, providing real-time updates and actionable insights to stay ahead of emerging threats.</div>
          </div>
        </div>
      </div>
    </section>
  )
}