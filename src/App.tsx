import './App.css'
import Button from './components/button/Button';
import { Icon } from "@iconify/react";
import Logo from "./assets/wole_logo.jpg";
import HeadShot from "./assets/Head_shot.jpg";
import Frame from './components/frame/Frame';


function App() {
  const iconData = [
    { icon: 'mdi:github', link: 'Githhub.com/oluwoleadetifa' },
    { icon: 'mdi:instagram', link: 'https://www.instagram.com/le.wole/' },
    { icon: 'mdi:linkedin', link: 'https://www.linkedin.com/in/oluwole-adetifa-278586113/' },
    { icon: 'mingcute:medium-fill', link: 'https://medium.com/@adetifaoluwole' },
  ];

  const imageData = [
    { image: Logo, alt: 'Logo', caption:'Head Shot', size:50 },
    { image: HeadShot, alt: 'Logo', caption:'Me with my students', size:70 },
    { image: Logo, alt: 'Logo', caption:'I received the SCMNS Honors Award during my masters', size:55 },
    { image: Logo, alt: 'Logo', caption:'I play the keyboard and direct music for my church', size:90 },
  ]
  const projectData = [
    {
      stack: 'Frontend',
      title: 'SCMNS Website Redesign',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://github.com/oluwoleadetifa/scmns-website',
      image: 'https://get.pxhere.com/photo/web-domain-service-website-development-seo-access-backup-data-database-e-commerce-hosting-html-http-marketing-programming-provider-resource-server-storage-support-system-tech-technology-www-illustration-sharing-electronic-device-business-learning-graphic-design-job-1571969.jpg',
      height: 400
    }, {
      stack: 'Frontend',
      title: 'TREM Baltimore Website',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://www.trembaltimore.org/',
      image: 'https://get.pxhere.com/photo/web-domain-service-website-development-seo-access-backup-data-database-e-commerce-hosting-html-http-marketing-programming-provider-resource-server-storage-support-system-tech-technology-www-illustration-sharing-electronic-device-business-learning-graphic-design-job-1571969.jpg',
      height: 300
    }, {
      stack: 'Frontend',
      title: 'T.O. Collections',
      description: 'Transforming your social media presence with a simple website',
      link: 'https://tocollections.com/',
      image: 'https://get.pxhere.com/photo/web-domain-service-website-development-seo-access-backup-data-database-e-commerce-hosting-html-http-marketing-programming-provider-resource-server-storage-support-system-tech-technology-www-illustration-sharing-electronic-device-business-learning-graphic-design-job-1571969.jpg',
      height: 400
    },
    {
      stack: 'Frontend',
      title: 'SCMNS Website Redesign',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://github.com/oluwoleadetifa/scmns-website',
      image: 'https://get.pxhere.com/photo/web-domain-service-website-development-seo-access-backup-data-database-e-commerce-hosting-html-http-marketing-programming-provider-resource-server-storage-support-system-tech-technology-www-illustration-sharing-electronic-device-business-learning-graphic-design-job-1571969.jpg',
      height: 300
    }, {
      stack: 'Frontend',
      title: 'SCMNS Website Redesign',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://github.com/oluwoleadetifa/scmns-website',
      image: 'https://get.pxhere.com/photo/web-domain-service-website-development-seo-access-backup-data-database-e-commerce-hosting-html-http-marketing-programming-provider-resource-server-storage-support-system-tech-technology-www-illustration-sharing-electronic-device-business-learning-graphic-design-job-1571969.jpg',
      height: 400
    }, {
      stack: 'Frontend',
      title: 'SCMNS Website Redesign',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://github.com/oluwoleadetifa/scmns-website',
      image: 'https://get.pxhere.com/photo/web-domain-service-website-development-seo-access-backup-data-database-e-commerce-hosting-html-http-marketing-programming-provider-resource-server-storage-support-system-tech-technology-www-illustration-sharing-electronic-device-business-learning-graphic-design-job-1571969.jpg',
      height: 300
    },
  ];

  return (
    <>
      <div className='web-site w-[100%] bg-gray-950'>
        {/* navbar */}
        <nav className='nav flex w-[100%] justify-between items-center py-4 px-4 md:px-10'>
          <img className='w-20 h-20 border-violet-50 m-1.5 object-cover' src={Logo} />
          <div className='w-[50%] flex justify-end md:justify-evenly text-sm'>
            <div className='hidden md:block'>Home</div>
            <div className='hidden md:block'>About Me</div>
            <div className='hidden md:block'> Services</div>
            <div className='hidden md:block '> Portfolio</div>
            <Button href="mailto:adetifaoluwole@gmail.com" label='Contact me' className='btn-primary ' icon=''/>
          </div>
        </nav>
        {/* hero */}
        <div className='px-4 md:px-10 bg-gray-950'>
          <div className='flex justify-between items-center'>
              <div className='text-4xl w-[75%] md:w-[60%]'>
                <span className='font-bold'>Software Engineer living in</span>
                <span className='text-gray-400'> Baltimore, Maryland</span>
            </div>
            {/* icon section */}
              <div className='flex flex-col justify-center items-end'>
                {iconData.map((data) => <div className='py-3'><a href={data.link}><Icon icon={data.icon} height={"1.5em"} className='hover:bg-blue-600'/></a></div>)}
              </div>
            </div>
            <div className=' flex justify-end'>
              {/* Description  */}
              <div className='text-right sm:w-[50%] md:w-[40%]'>
                Hey there, I am Oluwole, a passionate software engineer with a strong desire to
                turn your digital dreams into reality. With 6 years of experience and a deep love
                for web development. <br />
                <div className='flex justify-end py-4'>
                  <Button href='mailto:adetifaoluwole@gmail.com' label='Contact me' className='btn-primary mt-[2%] cursor-pointer block' icon='ic:outline-email'/>
                </div> 
            </div>
          </div>
        </div>
        {/* body */}
        <div className='bg-white text-black'>
          {/* two column section*/}
          <div className='block sm:flex justify-between py-[8%] px-4 md:px-10'>
            <div className='w-[100%] sm:w-[45%] text-4xl font-bold'>
              <span className='text-sm'>About Me </span> <br />
              Bringing Together the Best Minds for Outstanding Results
            </div>
            <div className='w-[100%] sm:w-[50%] text-left'>
              <p className='pb-2'>
              A passionate Quantum Computing Researcher and Software Engineer,
              I hold an M.Sc. in Advanced Computing from Morgan State University,
              where I specialized in FPGA-QRNG integration, post-quantum cryptography,
              and IoT security. My work has driven 30%+ efficiency gains in cryptographic
              systems while mentoring 70+ students in quantum computing and cybersecurity.
              </p>
              <p className='pb-2'>
              Recently recognized with the IBM Scholarship Award (2024) and the SCMNS Honors Award,
              I continue to advance equitable quantum security solutions. Beyond research,
              I serve as Head Tutor for 50+ computer science students and direct music
              at TREM Alpha House, blending technical rigor with creative collaboration.<br/>
              </p>
              <p className='pb-2'>
                Let’s build the future—securely and quantum-ready.
              </p>
              <div className='block md:flex w-[90%] items-end'>
                <Button href="https://github.com/oluwoleadetifa" className='btn-secondary mr-2' label='See my Works' icon='uil:suitcase' />
                <Button href="https://docs.google.com/document/d/1VbixsI5oT0q1Vntr3NrS37yXjCmPxihK4H9vW4Hj-lg/export?format=pdf" className='btn-third bg-gray-300' label='Download my Resume' icon='material-symbols:download'/>
              </div>
            </div>
          </div>
          {/* four column picture */}
          <div className='block md:flex justify-evenly items-end py-3 px-4 md:px-10 h-fit'>
            {imageData.map((data, id) =>
              <div style={{height: `${100 - data.size - 20}%`}} className='w-[80%] md:w-[22%] my-9 mx-auto' id={`${id}`}>
                <div className={`h-[${100 - data.size - 20}%] w-[100%]`}></div>
                <img
                  src={data.image}
                  className={'rounded-2xl object-cover'}
                  style={{ height: `${data.size}%`, width: '100%' }}
                  alt={`Image ${id}`} />
                <p className='h-[50px] text-center'>
                  {data.caption}
                </p>
              </div>
            )}
          </div>
          {/* three column project area
           */}
          <div className='px-4 md:px-10 py-8 text-white'>
            <div className='py-2 bg-gray-400 w-[130px] rounded-2xl text-center text-white text-sm font-bold'>Portfolio</div>
            {/* <div className='w-[100%] sm:w-[45%] text-4xl font-bold flex border-left'>
              See my Projects
            </div> */}
            <div className="flex items-center gap-3 text-4xl mt-3">
                <hr className="rotate-90 w-[2.25rem] border-t-4 border-gray-500" />
                <span className='text-black'>See my Projects</span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              {projectData.map((data, id)=> <Frame key={id} {...data} />)}
            </div>
          </div>
          {/* services I offer section */}
          <div className='bg-gray-400 px-6 py-8 h-fit'>
              <div className='block md:flex bg-white rounded-3xl text-black p-3 w-[100%] justify-between h-[20%]'>
                <div className='w-[45%] flex flex-col px-[2%]'>
                  <h2 className='text-2xl font-bold pt-[5%]'>
                  Service I offer
                  </h2>
                  <p className='h-[40%] flex flex-col justify-evenly'>
                    <span className='block my-3'>
                      From sleek product pages to seamless checkout experiences, out collection is meticulously curated.
                    </span> 
                    <Button href='mailto:adetifaoluwole@gmail.com' icon='' label='Get Started now' className='btn-secondary w-[150px]'/>
                  </p>
                </div>
                <div className='w-[45%] h-[100%] px-[2%]'>
                  <img src={Logo} alt="" className='w-[100%] h-[20vh]'/>
                </div>
            </div>
            <div>
              
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default App
