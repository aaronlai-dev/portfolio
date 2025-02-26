import ProjectCard from './ProjectCard.tsx'

export default function Projects() {
  const projects = [
    {
      title: "Personal Porfolio v2",
      desc: "This current portfolio, a personal playground to showcase my design philosphy and have fun",
      skills: "Typescript, React, Spline, Tailwind, Shadcn, FramerMotion"
    },
    {
      title: "LangChain RAG LLM",
      desc: "Software Developer Internship for Walter and Eliza Hall Institute of Medical Research",
      skills: "Python, LangChain, ChromaDB, LLM Tuning, Cloud Deployment"
    },
    {
      title: "Welcome Over",
      desc: "Self-developed webapp for casual open invites to private/public events",
      skills: "Firebase, React, Tailwind, DaisyUI"
    },
    {
      title: "Pairs Trading Quantitative Algorithm",
      desc: "Quant trading takehome assignment testing for cointegration to make a profitable trading strategy",
      skills: "Python, Pandas, NumPy"
    }
  ];

  return(
    <section className="h-dvh w-dvw">
      <div className="flex flex-row h-full">
      < div className="md:basis-2/5"></div>
        <div className="w-full md:basis-3/5 place-content-center justify-items-center p-12">
          <div className="grid grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                offset={`${index % 2 === 0 ? '-translate-y-10' : 'translate-y-10'}`}
                title={project.title}
                desc={project.desc}
                skills={project.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}