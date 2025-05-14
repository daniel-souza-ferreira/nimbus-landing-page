import React from 'react'

import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-options">
        <div className="option">
          <p>Links importantes:</p>
          <ul>
            <li>Sobre nós</li>
            <li>Planos</li>
            <li>Recursos</li>
            <li>FAQ</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className="option">
          <p>Contato:</p>
          <ul>
            <li>E-mail: support@nimbuscloud.com</li>
            <li>Telefone: (11) 1234-5678</li>
          </ul>
        </div>
        <div className="option">
          <p>Redes Sociais:</p>
          <ul>
            <li>LinkedIn | Twitter | Facebook</li>
          </ul>
        </div>
        <div className="option">
          <p>Outros:</p>
          <ul>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer