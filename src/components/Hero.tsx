function Hero() {
  return(
    <section className="h-dvh w-dvw">
      <div className="flex flex-row h-full">
        <div className="md:basis-2/5"></div>
        <div className="w-full md:basis-3/5 place-content-center justify-items-center">
          <div className="min-w-100 w-2/3 md:mr-10 font-oswa text-text">
            <h1 className="text-6xl font-bold ">
              Hello!
            </h1>
            <h2 className="mb-4 text-6xl">
              I'm <p className="inline text-pri">Aaron Lai</p>
            </h2>
            <p className="font-tili">
              and I'm a <b>full stack software developer</b> that loves to code on rainy days <br/><br/><br />
              <span className="hidden md:inline">
                <b>hint:</b> hover over the <span className="inline text-pri">teru teru bōzu</span> on the left!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero