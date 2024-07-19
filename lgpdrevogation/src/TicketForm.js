import React, { useState } from 'react';
import './css/TicketForm.css';
import emailjs from 'emailjs-com';



const RevogacaoLGPDForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Configuração do serviço e template do EmailJS
    const serviceID = 'service_k3ol2o6';
    const templateID = 'template_0tm9zc6';
    const userID = '3ruqVVChUGnmV5P0P';

    try {
      // Cria um objeto com os dados a serem enviados
      const formData = {
        from_name: name,
        reply_to: email,
        phone: phone,
        message: message,
      };

      // Envia o formulário utilizando sendForm
      const response = await emailjs.send(serviceID, templateID, formData, userID);

      console.log('Email enviado:', response);

      // Limpa o formulário após enviar o e-mail
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

      // Chama a função de submissão externa (pode ser para limpar o formulário)
      onSubmit();

      alert('Você recebera um e-mail de confirmação de retirada dos dados !!!');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Tente novamente mais tarde.');
    }
  };

  return (
    <form className="lgpd-form" onSubmit={handleSubmit}>
      <h2>Revogação De Termo LGPD</h2>
      <label>
        Nome Completo:
        <input type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        E-mail:
        <input type="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Telefone:
        <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <label>
        Motivo da Revogação:
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
          <button type="submit" >Enviar Revogação</button>
    </form>
  );
}

export default RevogacaoLGPDForm;
