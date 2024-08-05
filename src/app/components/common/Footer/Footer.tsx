export default function Footer() {
  return (
    <footer className='footer pt-[100px] xxl:pt-[164px]'>
      <div className="container">
        <div className='footer-top text-center pb-[80px] md:pb-[100px]'>
          <h2 className='text-[36px] md:text-[47px] lg:text-[68px] leading-[1.19] mb-[10px] lg:mb-[20px] font-medium'>Let’s make <br /> the connection!</h2>
          <a href='mailto:email@email.com' className='text-[22px] md:text-[26px] lg:text-[28px] leading-[2] font-medium text-gradient bg-clip-text underline'>
            email@email.com
          </a>
        </div>
        <span className='footer-copyright text-center flex justify-center py-[30px] lg:py-[50px] xxl:py-[80px]'>
          <ul className='flex flex-wrap justify-center'>
            <li className='text-sm'>{new Date().getFullYear()} adentro AG</li>
            <li className='text-sm'>Sihlbruggstrasse 109</li>
            <li className='text-sm'>CH 6340 Baar ZG</li>
            <li className='text-sm'>Switzerland</li>
          </ul>
        </span>
      </div>
    </footer>
  );
};