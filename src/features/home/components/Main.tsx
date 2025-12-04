import Image from 'next/image';
import Logo from '@/assets/logonome.svg';
import Whats from '@/assets/whatsapp.svg';
import Desenho from '@/assets/desenho.svg';
import Link from 'next/link'; // Importando o Link do Next.js

export function Main() {
    return (
        <>
            {/* Seção Principal */}
            <div className="w-full bg-black flex justify-center">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-top m-20 justify-between py-0">
                    <div className="text-white text-left flex-1">
                        <div className="flex flex-col items-start gap-6">
                            <h1 className="font-bold text-4xl md:text-5xl leading-tight">
                                Tornando mais fácil o aprendizado de Libras
                            </h1>
                            <p className="text-lg md:text-xl text-gray-100">
                                Aprenda Libras de forma simples, intuitiva e prática
                            </p>
                            {/* Usando Link para navegação */}
                            <Link href="/modules">
                                <button className="bg-white text-primary text-xl font-semibold w-48 rounded-lg p-3 transition-transform transform hover:scale-110">
                                    Começar
                                </button> 
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:mt-0">
                        <Image src={Desenho} alt="Desenho" className="w-full max-w-xl" />
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
