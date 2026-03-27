import AboutImg from '../assets/about.png';

export default function About () {
    const list = [
        "Front-End Developer (React) with more than 3 years of hands-on experience, specializing in crafting responsive, user-centric web applications using React 18, JavaScript (ES6+), and modern UI frameworks.",
        "Proven ability to design responsive, accessible, and maintainable interfaces that enhance user experience and performance, with a strong focus on web accessibility standards (WCAG 2.2) and cross browser compatibility",
        "Recognized for improving code efficiency, leading cross-functional teams, and driving frontend innovation through modern practices and AI-assisted tooling."
    ]
    const config  = {
        line1: 'Skill Cluster :',
        line2: "HTML5 | CSS3 | Less | Tailwind CSS | Bootstrap | Web Accessibility | Cross-Browser Compatibility | Hugo (SSO) | JavaScript(ES6+) | React 18 | Redux | React Router | Node.js | Azure DevOps (Boards, Pipelines) | CICD | Git | NPM | Agile/Scrum | Test-Driven Development (TDD)"
    }

    return <section className='flex flex-col items-center md:flex-row bg-secondary px-5 min-h-screen' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <ul className='pb-5'>
                    {
                        list.map((item, index) => (
                            <li key={index} className='mb-3'>{item}</li>
                        ))
                    }
                </ul>
                <p className='text-4xl border-b-4 border-primary mb-5 w-[220px] font-bold'>{config.line1}</p>
                <p className='pb-5 text-center'>{config.line2}</p>
            </div>
        </div>
    </section>
}