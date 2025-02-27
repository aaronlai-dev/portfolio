export default function Hero() {
  return(
    <div className="w-2/3 md:w-3/4 lg:w-2/3 lg:mr-10 font-oswa text-text text-4xl md:text-6xl">
      <h1 className="font-bold ">
        Hello!
      </h1>
      <h2 className="mb-4">
        I'm <p className="inline text-pri">Aaron Lai</p>
      </h2>
      <p className="text-sm font-tili">
        and I'm a <b>full stack software developer</b> that loves to code on rainy days 
        <span className="hidden md:inline">
          <br/><br/><br/>
          <b>hint:</b> hover over the <span className="inline text-pri">teru teru bōzu</span> on the left!
        </span>
      </p>
    </div>
  )
}