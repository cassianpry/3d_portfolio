import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);

  useGSAP(() => {
    const projects = [project1.current, project2.current, project3.current];
    projects.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: { trigger: project, start: "top bottom-=100" },
          }
        );
      }
    });
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );
    }
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1}>
            <a
              href="https://buscannabis.info/"
              target="_blank"
              className="hover:text-blue-300 text-white"
            >
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Buscannabis Platform" />
              </div>
              <div className="text-content">
                <h2>
                  Buscannabis: Comparação e Informação de Produtos de Cannabis
                  ao Alcance de um Clique
                </h2>
                <p className="text-white-50 md:text-xl">
                  Uma plataforma construída com ReactJS, TailwindCSS &
                  TypeScript para uma experiencia rápida e amigável.
                </p>
              </div>
            </a>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <a
                href="https://shopnxt.vercel.app/"
                target="_blank"
                className="hover:text-blue-300 text-white"
              >
                <div className="image-wrapper bg-[#0e0d0d]">
                  <img src="/images/project2.png" alt="BirWorld gaming shop" />
                </div>
                <h2>E-commerce de Jogos Digitais</h2>
                <span>
                  Dados para teste: email: teste@teste.teste senha:1234567890
                </span>
              </a>
            </div>
            <div className="project" ref={project3}>
              <a
                href="https://movies-one-blue.vercel.app/"
                target="_blank"
                className="hover:text-blue-300 text-white"
              >
                "
                <div className="image-wrapper bg-[#242222]">
                  <img src="/images/project3.png" alt="Movies DB" />
                </div>
                <h2>Aplicação de listagem de Filmes</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
