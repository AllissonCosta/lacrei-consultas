import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaBrain, FaStethoscope, FaHandsHelping } from 'react-icons/fa'; 
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Button from '../src/components/layout/ui/Button';


const serviceList = [
    {
        id: 1,
        title: 'Consulta Psicológica',
        description: 'Terapia online com profissionais especializados em diversidade e acolhimento LGBTQIA+.',
        icon: FaBrain, 
    },
    {
        id: 2,
        title: 'Consulta Médica',
        description: 'Atendimento médico humanizado para diversas especialidades, focado em saúde da comunidade.',
        icon: FaStethoscope, 
    },
    {
        id: 3,
        title: 'Acolhimento',
        description: 'Espaço seguro para falar sobre suas necessidades e receber direcionamento profissional.',
        icon: FaHandsHelping,  
    },
];



const ServicesContainer = styled.div`
    min-height: 80vh;
    padding: 4rem 2rem;
    background-color: #f7f7f7;
`;

const ServicesTitle = styled.h1`
    color: #1F284F;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3.2rem;
`;

const CardGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 3rem;
    
    // Configuração 1 coluna
    grid-template-columns: 1fr; 

    // Tablet/Desktop 2 ou 3 colunas 
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`;

const ServiceCard = styled.div`
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

// O CardIcon será renderizado como o componente do ícone
const CardIcon = styled.div` 
    font-size: 3rem;
    color: ${(props) => props.theme.colors.logoPrimary || '#008479'}; /* Adiciona cor para contraste */
    display: block;
    margin-bottom: 1rem;

    // Garante que o SVG dentro dele tenha o tamanho certo
    svg {
        width: 1em;
        height: 1em;
    }
`;

const CardTitle = styled.h2`
    color: ${(props) => props.theme.colors.logoPrimary || '#008479'};
    font-size: 2.2rem;
    margin-bottom: 1rem;
`;

const CardDescription = styled.p`
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.6;
`;


const ServicosPage: React.FC = () => {
    const router = useRouter();

    const handleAgendar = () => {
        router.push('/agendamento'); 
    };

    return (
        <>
            <Header />
            <ServicesContainer>
                <ServicesTitle>Nossos Serviços de Acolhimento</ServicesTitle>
                <CardGrid>
                    {serviceList.map((service) => (
                        <ServiceCard key={service.id}>
                            {/* 3. Renderiza o CardIcon, passando o componente do ícone como um filho */}
                            <CardIcon>
                                {<service.icon />} 
                            </CardIcon>
                            
                            <CardTitle>{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                            
                            <Button 
                                color="primary" 
                                onClick={handleAgendar}
                                aria-label={`Agendar ${service.title}`}
                            >
                                Agendar Agora
                            </Button>
                        </ServiceCard>
                    ))}
                </CardGrid>
            </ServicesContainer>
            <Footer />
        </>
    );
};

export default ServicosPage;