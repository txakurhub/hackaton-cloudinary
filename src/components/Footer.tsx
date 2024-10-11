import Credits from "./Credits"

const Footer: React.FC = () => {
    return (
        <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
            <Credits />
            <a href="https://github.com/txakurhub">
                txakur  {new Date().getFullYear()}
            </a>
        </footer>
    )
}

export default Footer