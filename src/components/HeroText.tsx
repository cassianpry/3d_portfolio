import { motion } from "motion/react";
import Button from "./Button";
import { words } from "../constants/index";

const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left">
      {/* Desktop View */}
      <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        <div className="flex flex-col gap-7">
          <div className="hero-text">
            <motion.h1
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              Transformando{" "}
              <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                    <span
                      key={word.text}
                      className="flex items-center md:gap-3 gap-1 pb-2 pt-4"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span className="text-5xl gradient">{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </motion.h1>
            <motion.h1
              className="text-5xl font-medium"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              em <span className="gradient">Projetos Reais</span>
            </motion.h1>
            <motion.h1
              className="text-4xl font-medium"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              que geram resultados
            </motion.h1>
            <motion.p
              className="text-white-50 md:text-xl relative z-10 mt-5 pointer-events-none"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              Olá, eu sou o Cassiano, um desenvolvedor e tenho paixão por codar,
              <br />
              transformando desafios em soluções práticas. <br />
              Adoro explorar novas tecnologias e criar projetos que realmente
              funcionam.
            </motion.p>
          </div>
          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            id="button"
            text="Veja meu Trabalho"
          />
        </div>
      </header>
    </div>
  );
};

export default HeroText;
