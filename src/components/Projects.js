import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/newscape.webp';
import websiteImg3 from '../assets/train-ticket-date-calculator.jpeg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://ecommercesserve.netlify.app/'
            },
            {
                image: websiteImg2,
                description: 'Discover breaking news, Built with React JS',
                link: 'https://newsscape.netlify.app/'
            },
             {
                image: websiteImg3,
                description: 'Effortlessly calculate train ticket dates and set remainders. Built with React JS.',
                link: 'https://train-booking-calc.netlify.app/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center items-center min-h-screen bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col justify-center md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}