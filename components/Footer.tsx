"use client"
import React from 'react';

// Footer bileşeni
export default function Footer() {
  return (
    <footer style={footerStyle}>
      <h2 style={titleStyle}>Book App</h2>
      <p style={authorStyle}>Read Free Books</p>
      <div style={socialMediaStyle}>
        <HoverLink href="https://facebook.com">Facebook</HoverLink>
        <HoverLink href="https://twitter.com">Twitter</HoverLink>
        <HoverLink href="https://instagram.com">Instagram</HoverLink>
      </div>
      <div style={extraInfoStyle}>
        <p>&copy; 2024 Halilhan Sayın</p>
      </div>
    </footer>
  );
}

// CSS stilleri
const footerStyle: React.CSSProperties = {
  backgroundColor: '#f5e5d7',
  padding: '20px',
  textAlign: 'center',
  borderTop: '1px solid #ccc',
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  marginBottom: '10px',
};

const authorStyle: React.CSSProperties = {
  margin: '5px 0',
  color: '#555',
};



const socialMediaStyle: React.CSSProperties = {
  marginTop: '10px',
};

const linkStyle: React.CSSProperties = {
  margin: '0 10px',
  textDecoration: 'none',
  color: '#0070f3',
  transition: 'color 0.3s ease',
};

const extraInfoStyle: React.CSSProperties = {
  marginTop: '15px',
  fontSize: '14px',
  color: '#777',
};

// Link bileşeni için stil
const HoverLink = ({ children, ...props }: any) => {
  return (
    <a 
      {...props} 
      style={linkStyle} 
      onMouseEnter={e => e.currentTarget.style.color = '#005bb5'} 
      onMouseLeave={e => e.currentTarget.style.color = '#0070f3'}
    >
      {children}
    </a>
  );
};