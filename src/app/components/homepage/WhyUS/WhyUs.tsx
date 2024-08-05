import Image from "next/image";

export default function WhyUs() {
  const whyUsData = [
    {
      icon: '/whyus/icon-1.svg',
      title: 'Advanced Automation',
      description: 'Leverage the power of AI to automate complex security tasks, reducing manual effort and minimizing human error.',
    },
    {
      icon: '/whyus/icon-2.svg',
      title: 'Leveraging Large Language Models (LLM)',
      description: 'Our automated frameworks ensure your organization remains compliant with the latest regulations, mitigating risks and safeguarding your reputation.',
    },
    {
      icon: '/whyus/icon-3.svg',
      title: 'SAST/DAST Scanning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    },
    {
      icon: '/whyus/icon-4.svg',
      title: 'Compliance Governance',
      description: 'Our automated frameworks ensure your organization remains compliant with the latest regulations, mitigating risks and safeguarding your reputation.',
    },
    {
      icon: '/whyus/icon-5.svg',
      title: 'DevSecOps',
      description: 'Integrate security seamlessly into your development lifecycle with our DevSecOps approach, enhancing collaboration and delivering robust, secure applications faster.',
    },
    {
      icon: '/whyus/icon-6.svg',
      title: 'Vulnerability Management',
      description: 'Proactively manage and remediate vulnerabilities with our comprehensive solution, ensuring your systems remain secure and resilient against emerging threats.',
    },
  ];

  return (
    <section className='why-us py-[50px] lg:py-[80px]'>
      <div className="container">
        <h3 className="title-m mb-[40px] md:mb-[70px] xl:mb-[83px] xxl:mb-[97px]">Why choose us?</h3>

        <div className="why-layout md:pl-[80px] lg:pl-[110px] grid grid-cols-1 lg:grid-cols-2 gap-x-[42px] gap-y-[35px] lg:gap-y-[57px]">
          {whyUsData.map((item, index) => (
            <div className="why-item flex" key={index}>
              <div className="icon w-[60px] h-[60px] min-w-[60px] xl:w-[88px] xl:h-[88px] xl:min-w-[88px]">
                {item.icon && (
                  <Image src={item.icon} width={88} height={88} alt='icon' className="object-contain object-center" />
                )}
              </div>
              <div className="info pl-[13px] md:pl-[20px] xl:pl-[30px] grow">
                {item.title && (
                  <div className="title font-medium text-[22px] xl:text-[26px] leading-[1.15] mb-[15px] max-w-[350px]">{item.title}</div>
                )}
                {item.description && (
                  <div className="description text-sm md:text-base leading-[1.875] max-w-[405px]">{item.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
