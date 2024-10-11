import { motion } from "framer-motion"
import useMousePosition from "../utils/useMousePosition";
import { useState } from "react";
import "../App.css"
import ImageUploader from "./ImageUploader";

const Hero: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { x, y } = useMousePosition();
    const size: number = isHovered ? 400 : 40;
    return (
        <header className="relative maskContainer w-full h-screen z-10 flex items-center justify-between bg-black p-2
        xl:flex-col xl:flex-col-reverse xl:p-10 ">
            <div className="w-4/12 h-full text-white font-title flex flex-col items-center justify-center">
                <h1 className=" body rotate-90 whitespace-nowrap text-9xl 
                xl:text-[15rem] xl:rotate-0">noche de  bugs</h1>
            </div>



            <div className="relative w-8/12 h-full border-4 border-white p-4 
            xl:border-0 xl:w-full ">
                <div className="absolute top-10 right-10 z-50 text-white font-body flex flex-col items-end gap-5">
                    <ImageUploader />
                    <button className="text-4xl xl:text-6xl">video</button>
                    <button className="text-4xl xl:text-6xl">texto</button>
                </div>
            </div>

            <motion.div
                className="mask w-1/2"
                animate={{
                    WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
                <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}
                >
                    Internal server error: [postcss]
                    <span>{" "}Double colon{" "}</span>
                    at Input.error (node_modules\.pnpm\postcss@8.4.47\node_modules\postcss\lib\input.js:106:16)
                    at Parser.checkMissedSemicolon (node_modules\.pnpm\postcss@8.4.47\node_modules\postcss\lib\parse
                    at Parser.decl (node_modules\.pnpm\postcss@8.4.47\node_modules\postcss\lib\parser.js:296:12)
                    at Parser.other (node_modules\.pnpm\postcss@8.4.47\node_modules\postcss\lib\parser.js:399:18)
                    at Parser.parse (node_modules\.pnpm\postcss@8.4.47\node_modules\postcss\lib\parser.js:470:16)
                    <span>{" "}Cannot read property 'map' of undefined'{" "}</span>
                    at parse (node_modules\.pnpm\postcss@8.4.47\node_modules\postcss\lib\parse.js:11:12)
                    at new LazyResult (node_modules\.pnpm\postcss@8.4.47\node_mfodules\postcss\lib\lazy-result.js:133
                    at Processor.process (node_modules\.pnpm\postcss@8.4.47\node_modules\postcss\lib\processor.js:53
                    at compileCSS (node_modules/.pnpm/vite@5.4.8_@types+node@22.7.5/node_modules/vite/dist/n
                    at async TransformPluginContext.transform (node_modules/.pnpm/vite@5.4.8_@types+node@22.
                    at async PluginContainer.transform (node_modules/.pnpm/vite@5.4.8_@types+node@22.7.5/nod
                    Internal server error: <span>{" "} Unexpected token, expected "," (55:17){" "}</span>
                    at constructor (node_modules\.pnpm\@babel+parser@7.25.7\node_modules\@babel\parser\lib\index.js:362:19)
                    at TypeScriptParserMixin.raise (node_modules\.pnpm\@babel+parser@7.25.7\node_modules\@babel\parser\lib\index.js:3259:19)
                    at TypeScriptParserMixin.unexpected (node_modules\.pnpm\@babel+parser@7.25.7\node_modules\@babel\parser\lib\index.js:3279:16)
                    at TypeScriptParserMixin.expect (node_modules\.pnpm\@babel+parser@7.25.7\node_modules\@babel\parser\lib\index.js:3589:12)
                    at TypeScriptParserMixin.parseParenAndDistinguishExpression (node_modules\.pnpm\@babel+parser@7.25.7\node_modules\@babel\parser\lib\index.js:11182:14)
                    at TypeScriptParserMixin.parseExprAtom (node_modules\.pnpm\@babel+parser@7.25.7\node_modules\@babel\parser\lib\index.js:10849:23)
                    at TypeScriptParserMixin.parseExprAtom (node_modules\.pnpm\@babel+parser@7.25.7\node_modules\@babel\parser\lib\index.js:6811:20)
                </p>
            </motion.div>
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
