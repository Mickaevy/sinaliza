import Image from 'next/image';
import Logo from '@/assets/logosnome.svg';
import Whats from '@/assets/whatsapp.svg';
import Desenho from '@/assets/desenho.png';
import lista from '@/assets/lista.png';
import Link from 'next/link'; // Importando o Link do Next.js

export function Main() {
    return (
        <>
            {/* Seção Principal */}
            <div className="w-full bg-primary flex justify-center">
                <div className="w-full md:w-11/12 container px-6 md:px-12 flex flex-col md:flex-row items-top m-10 justify-center py-1">
                    <div className="text-white text-xs flex-1">
                        <div className="flex flex-col text-left gap-6">
                            <h1 className="font-bold md:text-5xl">
                                Tornando o Aprendizado de<br/> libras mais fácil
                            </h1>
                            <h2 className="text-lg md:text-2xl text-gray-100 ">
                                Aprenda Libras de forma simples, intuitiva e prática
                            </h2>
                            {/* Usando Link para navegação */}
                            <Link href="/modules">
                                <button className="bg-white text-primary text-xl font-semibold w-56 rounded-lg p-3 transition-transform transform hover:scale-110">
                                    Começar
                                </button> 
                            </Link>
                            <div className="flex flex-row gap-16">
                            <div className="flex flex-row items-center gap-2">
                        <Image src={Logo} alt="Logo" width={32} height={32} className="rounded-full" />
                        <h3 className="text-lg md:text-base text-gray-100 ">
                                Aprendizagem <br/>visual
                            </h3>
                    </div>
                            
                            <div className="flex flex-row items-center gap-2">
                            <Image src={lista} alt="lista" width={32} height={32} className="rounded-lg" />
                        <h4 className="text-lg md:text-base text-gray-100 ">
                                Conteúdo <br/>organizado em módulos
                            </h4>
                    </div>
                    </div>

                        </div>
                    </div>
                    <div className="flex justify-center items-baseline">
                        <Image src={Desenho} alt="Desenho" className="w-full max-w-md" />
                    </div>
                    
                </div>
            </div>
            
            {/* Seção Sobre
            <div className="w-full bg-secondary flex justify-center">
                <div className="container mx-auto px-6 md:px-12 py-12">
                    <section className="text-center text-primary">
                        <h1 id='sobre' className="text-3xl font-extrabold mb-4">Sobre</h1>
                        <p className="max-w-3xl mx-auto text-lg text-justify">
                        A importância do aprendizado da Língua Brasileira de Sinais (Libras) para a comunidade e familiares das pessoas surdas e/ou com deficiência auditiva torna-se relevante para a inclusão e a integração das pessoas com deficiência na sociedade, possibilitando melhorias na comunicação, acesso as informações e consequentemente a educação de qualidade. Neste sentido, o projeto intitulado: “SINALIZA: Facilitando a Aprendizagem de Libras” é uma ferramenta web de inovação social facilitadora para o aprendizado básico de Libras em situações cotidianas, visando a saúde e bem-estar da sociedade, a promoção da educação de qualidade e a redução das desigualdades sociais, alinhando-se aos Objetivos de Desenvolvimento Sustentável (ODS). O projeto foi desenvolvido por uma equipe multicampi do Instituto Federal de Educação, Ciência e Tecnologia do Maranhão (IFMA) pertencente a Mesorregião do Leste Maranhense, composta por professores, técnicos administrativos e estudantes de cursos técnicos e superiores, visando atender a usuários com diferentes níveis de proficiência, desde iniciantes até aqueles que desejam reforçar seus conhecimentos em Libras, garantindo que todos possam aprender conforme suas necessidades.
                        </p>
                    </section>
                </div>
            </div>
             */}

            {/* Botão WhatsApp */}
            <a 
                href="https://wa.me/5586994618767" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="fixed bottom-7 right-7 z-50 w-14 h-14 flex items-center justify-center"
            >
                <Image 
                    src={Whats} 
                    alt="WhatsApp" 
                    width={50} 
                    height={50} 
                    className="transition-transform hover:scale-110"
                />
            </a>
        </>
    );
}
