import React from 'react'

const Footer = () => {
  const socialMediaLinks = [
    { id: 1, src: '/images/ico-facebook.png', alt: 'Facebook', url: 'https://facebook.com' },
    { id: 2, src: '/images/ico-instagram.png', alt: 'Twitter', url: 'https://instagram.com' },
    { id: 3, src: '/images/ico-tiktok.png', alt: 'Instagram', url: 'https://tiktok.com' },
    { id: 4, src: '/images/ico-whatsapp.png', alt: 'LinkedIn', url: 'https://whatsapp.com' },
  ];
  return (
    <footer className="footer">
    <div className="footer-logo">
      <img src='/images/DH.png' alt="Logo grande" />
    </div>
    <div className="footer-social">
      <ul>
        {socialMediaLinks.map((social) => (
          <li key={social.id}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <img src={social.src} alt={social.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
  )
}

export default Footer
