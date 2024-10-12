import { motion } from 'framer-motion';

const BouncingTitle: React.FC = () => {
    const text = "noche de bugs";
    const bouncingSpan = (letter: string, index: number) => {
        if (letter === ' ') {
            return <span key={index} className="inline-block" style={{ width: '0.2em' }}>&nbsp;</span>;
        }
        return (
            <motion.span
                key={index}
                className="inline-block relative"
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.5,
                }}
            >
                {letter}
            </motion.span>
        );
    };
    return (
        <h1 className="relative w-full text-9xl xl:text-[15rem] xl:rotate-0">
            {text.split('').map((letter, index) => bouncingSpan(letter, index))}
        </h1>
    );
};

export default BouncingTitle;