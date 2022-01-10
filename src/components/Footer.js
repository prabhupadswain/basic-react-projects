import React from 'react';
import './stylesheets/Footer.css';

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return <footer>&copy; Copyright {year} PS Learning Centre Private Limited</footer>;
};

export default Footer;
