import ImageUploader from "./components/ImageUploader"


function App() {


  return (
    <main>
      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">

        <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
          Cloudinary Hackaton
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium mb-10 sm:mb-11">
          esta cuestión se divide en 3 simples secciones{" "}
          <code className="font-mono text-blue-500 font-bold">espejo mardito</code>
          , <code className="font-mono text-blue-500 font-bold">cuentos interactivos</code> {" "}y{" "}
          <code className="font-mono text-blue-500 font-bold">portal del terror</code>,{" "}
          . Configured and ready to go.
        </p>
        <div className="absolute top-12 right-12 opacity-10 lg:opacity-50">
          {/* <Logos.Vite className="w-56 h-56" /> */}
        </div>
      </header>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <ImageUploader />
      </section>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        {/* {features.map((props, index) => (
          <div key={index} className="col-span-10 sm:col-span-5">
            <Card
              title={props.name}
              description={props.description}
              Icon={props.logo}
              href={props.docs}
            />
          </div>
        ))} */}
      </section>
      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        <a href="https://github.com/jvidalv">
          txakur  {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  )
}

export default App
