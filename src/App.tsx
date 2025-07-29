import './App.css'
import Button from './components/button/Button';
import { Icon } from "@iconify/react";
import Logo from "./assets/wole_logo.jpg";
import HeadShot from "./assets/Head_shot.jpg";


function App() {
  const iconData = [
    { icon: 'mdi:github', link: 'Githhub.com/oluwoleadetifa' },
    { icon: 'mdi:instagram', link: 'https://www.instagram.com/le.wole/' },
    { icon: 'mdi:linkedin', link: 'https://www.linkedin.com/in/oluwole-adetifa-278586113/' },
    { icon: 'mingcute:medium-fill', link: 'https://medium.com/@adetifaoluwole' },
  ];

  const imageData = [
    { image: Logo, alt: 'Logo', caption:'Head Shot', size:'h-[150px]' },
    { image: HeadShot, alt: 'Logo', caption:'Me with my students', size:'h-[200px]' },
    { image: Logo, alt: 'Logo', caption:'I received the SCMNS Honors Award during my masters', size:'h-[130px]' },
    { image: Logo, alt: 'Logo', caption:'I play the keyboard and direct music for my church', size:'h-[200px]' },
  ]

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
            <Button href="https:google.com" label='Contact me' className='btn-primary ' icon=''/>
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
              <div className='block md:flex w-[90%]'>
                <Button href="https://github.com/oluwoleadetifa" className='btn-secondary mr-2 mb-2' label='See my Works' icon='uil:suitcase' />
                <Button href="https://docs.google.com/document/d/1VbixsI5oT0q1Vntr3NrS37yXjCmPxihK4H9vW4Hj-lg/export?format=pdf" className='btn-third bg-gray-300' label='Download my Resume' icon='material-symbols:download'/>
              </div>
            </div>
          </div>
          {/* four column picture */}
          <div className='block md:flex justify-evenly items-end py-3'>
            {imageData.map((data) =>
              <div className='w-[22%]'>
                <img src={data.image} className={data.size + " w-[100%] rounded-2xl object-cover"} />
                <p>
                  {data.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>  
    </>
  )
}

export default App
