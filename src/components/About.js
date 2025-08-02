import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: "Hi, I'm Ram Sudharsan. I'm a Front-End web developer. I built beautiful Websites with front-end technologies",
        line2: 'Skill Cluster :',
        line3: "HTML5 | CSS3 | Less | Tailwind CSS | Bootstrap | Web Accessibility | Cross-Browser Compatibility | Hugo (SSO) | JavaScript(ES6+) | React 18 | Redux | React Router | Node.js | Azure DevOps (Boards, Pipelines) | CICD | Git | NPM | Agile/Scrum | Test-Driven Development (TDD)"
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='text-4xl border-b-4 border-primary mb-5 w-[220px] font-bold'>{config.line2}</p>
                <p className='pb-5 text-center'>{config.line3}</p>
            </div>
        </div>
    </section>
}