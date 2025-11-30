// pages/agendamento.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Button from '../src/components/layout/ui/Button';

// Tipagem para o formulário
interface FormData {
  nome: string;
  email: string;
  telefone: string;
  servico: string;
}


const FormContainer = styled.div`
  min-height: 80vh;
  padding: 4rem 2rem;
  background-color: #f7f7f7;
`;

const FormTitle = styled.h1`
  color: #1F284F;
  text-align: center;
  margin-bottom: 2rem;
`;

const FormWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.p`
  color: #008000;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const AgendamentoPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    { value: '', label: 'Selecione um serviço...' },
    { value: 'consulta_psicologica', label: 'Consulta Psicológica' },
    { value: 'consulta_medica', label: 'Consulta Médica' },
    { value: 'acolhimento', label: 'Acolhimento Lacrei' },
  ];

  // Função genérica para lidar com a mudança nos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpa o erro ao começar a digitar
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Lógica de validação
  const validate = () => {
    let newErrors: Partial<FormData> = {};
    if (!formData.nome.trim()) {
      newErrors.nome = 'O nome é obrigatório.';
    }
    if (!formData.email) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!formData.telefone) {
      newErrors.telefone = 'O telefone é obrigatório.';
    }
    if (!formData.servico) {
      newErrors.servico = 'A seleção de um serviço é obrigatória.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Lógica de submissão do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false); // Reseta a mensagem de sucesso

    if (validate()) {
      setIsSubmitting(true);

      // Simulação de chamada de API/Backend
      console.log('Dados do Formulário:', formData);
      
      // Simula um delay de 1.5s para o envio
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Limpa o formulário após sucesso
        setFormData({ nome: '', email: '', telefone: '', servico: '' });
      }, 1500);

    } else {
      console.log('Validação falhou:', errors);
    }
  };

  return (
    <>
      <Header />
      <FormContainer>
        <FormTitle>Agende sua Consulta ou Acolhimento</FormTitle>
        <FormWrapper onSubmit={handleSubmit}>
          {isSuccess && (
            <SuccessMessage>
              Agendamento enviado com sucesso! Em breve entraremos em contato.
            </SuccessMessage>
          )}

          <FormGroup>
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              aria-required="true" // Acessibilidade
            />
            {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              aria-required="true"
            />
            {errors.telefone && <ErrorMessage>{errors.telefone}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="servico">Serviço Desejado</Label>
            <Select
              id="servico"
              name="servico"
              value={formData.servico}
              onChange={handleChange}
              aria-required="true"
            >
              {services.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            {errors.servico && <ErrorMessage>{errors.servico}</ErrorMessage>}
          </FormGroup>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Finalizar Agendamento'}
          </Button>

        </FormWrapper>
      </FormContainer>
      <Footer />
    </>
  );
};

export default AgendamentoPage;