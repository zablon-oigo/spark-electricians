import React,{useState} from 'react'
import about from '../assets/images/about.jpg'
import award1 from '../assets/images/award1.png'
import award2 from '../assets/images/award2.png'
import award3 from '../assets/images/award3.png'

function About() {
  const [activeSection, setActiveSection] = useState('Mission');

  const toggleSection = (section) => {
    setActiveSection(section);
  };
  const backgroundImage = {
    backgroundImage: `url(${about})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '350px',  
    width: '100%'

  }
  
  return (
    <>
    <div className="min-h-screen ">
      <div className=" relative -z-10" style={backgroundImage}>
        <div className="bg-black/70  absolute top-0 right-0 w-full h-[350px] md:px-20 px-5 py-32">
          <h2 className="md:text-6xl text-3xl text-white text-center font-semibold">
            About Us
          </h2>
        </div>
      </div>
      <div className="my-10 md:px-20 px-5">
          <h2 className="mb-4 text-center md:text-6xl text-2xl font-semibold">
            Company Profile
          </h2>
          <p className="text-xl font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed amet, quibusdam enim quis laboriosam impedit doloribus nemo ab neque illum tempore magni unde? Corrupti, ipsam saepe accusamus facilis rem, corporis blanditiis, repellendus quas vitae at consectetur asperiores optio iusto esse.
          </p>
        </div>
        <div className="my-10 h-[600px] bg-gray-100 md:px-20 px-5 ">
          <div className="flex items-center flex-col md:flex-row justify-center gap-2">
            <div className="w-1/3 py-6">
              <h2 className="text-4xl font-semibold mb-10">
                Accolades
              </h2>
              <div className="flex items-center justify-center gap-6">
                <img src={award1} alt="" />
                <img src={award2} alt="" className="" />
                <img src={award3} alt="" />
              </div>
            </div>
            <div className="w-3/4">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      <div className=" ">
        <h2
          className="text-4xl font-semibold border-b-2 cursor-pointer"
          onClick={() => toggleSection('Mission')}
        >
          Mission
        </h2>
        {activeSection === 'Mission' && (
          <div >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quis dolores dignissimos ad quaerat rem id sapiente incidunt accusamus totam obcaecati sunt, enim non nisi eum qui eius laboriosam error harum quibusdam autem soluta illum necessitatibus consequuntur! Saepe, voluptatibus distinctio.
          </div>
        )}
      </div>

      <div className="">
        <h2
          className="text-4xl font-semibold cursor-pointer"
          onClick={() => toggleSection('Vision')}
        >
          Vision
        </h2>
        {activeSection === 'Vision' && (
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quis dolores dignissimos ad quaerat rem id sapiente incidunt accusamus totam obcaecati sunt, enim non nisi eum qui eius laboriosam error harum quibusdam autem soluta illum necessitatibus consequuntur! Saepe, voluptatibus distinctio.
          </div>
        )}
      </div>

      <div className="">
        <h2
          className="text-4xl font-semibold cursor-pointer"
          onClick={() => toggleSection('Values')}
        >
          Values
        </h2>
        {activeSection === 'Values' && (
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quis dolores dignissimos ad quaerat rem id sapiente incidunt accusamus totam obcaecati sunt, enim non nisi eum qui eius laboriosam error harum quibusdam autem soluta illum necessitatibus consequuntur! Saepe, voluptatibus distinctio.
          </div>
        )}
      </div>
    </div>
            </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default About