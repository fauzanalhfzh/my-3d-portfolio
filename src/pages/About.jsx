import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants/index'
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I am
        <span className='blue-gradient_text font-semibold shadow-drop-sm'> Fauzan</span> 👋🏻
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
        Software Engineering 🚀 from Banten, Indonesia. specializing in back-end services. I’m currently exploring next.js and nest.js with a big interest in 3D web and Data Visualization.
      </p>
      </div>

        {/* skill section */}
      <div className="py-10 flex flex-col">
        <h1 className="subhead-text">My Skills</h1>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                src={skill.imageUrl} 
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* work experience section */}
      <div className="py-16">
        <h3 className="subhead-text">
          Work Experience
        </h3>
        <p className='mt-5 flex flex-col gap-3 text-slate-500'>
        I have worked with all sorts of companies, leveling up my skills and teaming up with smart people. here is the rundown:
      </p>
      
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center h-full w-full'>
                    <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium text-base' style={{margin: 0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`Experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default About