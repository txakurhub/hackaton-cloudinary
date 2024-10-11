const Hero: React.FC = () => {
    return (
        <header className="h-screen z-10 w-full flex items-center justify-between bg-black p-2
        xl:flex-col xl:flex-col-reverse xl:p-10 ">
            <div className="w-4/12 h-full  text-white font-title flex flex-col items-center justify-center">
                <h1 className="rotate-90 whitespace-nowrap text-9xl 
                xl:text-[15rem] xl:rotate-0">noche de  bugs</h1>
            </div>
            <div className="w-8/12 h-full border-4 border-white p-4 
            xl:border-0 xl:w-full">
                <div className="text-white font-body flex flex-col items-end gap-5">
                    <h2 className="text-4xl xl:text-6xl">imagen</h2>
                    <h2 className="text-4xl xl:text-6xl">video</h2>
                    <h2 className="text-4xl xl:text-6xl">texto</h2>
                </div>
            </div>
        </header>
    )
}
export default Hero

/*
            <div className="flex w-full gap-5">
                <p className="border-4 border-violeta w-1/2">
                    esta cuestión se divide en 3 simples secciones{" "}
                    <code className="font-mono text-blue-500 font-bold">espejo mardito</code>
                    , <code className="font-mono text-blue-500 font-bold">cuentos interactivos</code> {" "}y{" "}
                    <code className="font-mono text-blue-500 font-bold">portal del terror</code>,{" "}
                    . Configured and ready to go.
                </p>
                <p className="border-4 border-naranja w-1/2">
                    esta cuestión se divide en 3 simples secciones{" "}
                    <code className="font-mono text-blue-500 font-bold">espejo mardito</code>
                    , <code className="font-mono text-blue-500 font-bold">cuentos interactivos</code> {" "}y{" "}
                    <code className="font-mono text-blue-500 font-bold">portal del terror</code>,{" "}
                    . Configured and ready to go.
                </p>
            </div>
            <div className="absolute top-12 right-12 opacity-10 lg:opacity-50">
                {/* <Logos.Vite className="w-56 h-56" /> }
                </div>
                */
