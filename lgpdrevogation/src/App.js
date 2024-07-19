// App.js
import React from 'react';
import Header from './Header';
import RevogacaoLGPDForm from './TicketForm'; // Corrigi o nome do arquivo para correspondência com o nome do componente
import Footer from './Footer';
import './App.css'; // Importe o arquivo de estilos, se necessário
import TermoRevogacaoLGPD from './RevogationTerm';

const App = () => {
  const handleFormSubmit = async () => {
    // Implemente a lógica para lidar com a submissão do formulário aqui
    console.log('Formulário enviado');

    // Por exemplo, você pode querer mostrar uma mensagem de sucesso ao usuário
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <TermoRevogacaoLGPD />
        <RevogacaoLGPDForm onSubmit={handleFormSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
