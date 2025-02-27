import ProjectCard from './ProjectCard.tsx'

export default function Projects() {
  const projects = [
    {
      title: "Personal Porfolio v2",
      desc: "This current portfolio, a personal playground to showcase my design philosphy and have fun",
      skills: "Typescript, React, Spline, Tailwind, Shadcn, FramerMotion",
      git: "https://github.com/aaronlai-dev/portfolio"
    },
    {
      title: "LangChain RAG LLM",
      desc: "Software Developer Internship for Walter and Eliza Hall Institute of Medical Research",
      skills: "Python, LangChain, ChromaDB, LLM Tuning, Cloud Deployment",
      git: "https://github.com/aaronlai-dev/student-organiser-rag-llm"
    },
    {
      title: "Welcome Over",
      desc: "Self-developed webapp for casual open invites to private/public events",
      skills: "Firebase, React, Tailwind, DaisyUI",
      git: "https://github.com/aaronlai-dev?tab=repositories"
    },
    {
      title: "Pairs Trading Quantitative Algorithm",
      desc: "Quant trading takehome assignment testing for cointegration to make a profitable trading strategy",
      skills: "Python, Pandas, NumPy",
      git: "https://github.com/aaronlai-dev/pairs-trading-simulation"
    }
  ];

  return(
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-12">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          offset={`${index % 2 === 0 ? 'md:-translate-y-10' : 'md:translate-y-10'}`}
          title={project.title}
          desc={project.desc}
          skills={project.skills}
          git={project.git}
        />
      ))}
    </div>
  )
}