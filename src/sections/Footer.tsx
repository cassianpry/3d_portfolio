const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex justify-center md:col-span-3">
          <p className="w-full text-center">
            © {new Date().getFullYear()} Cassiano Marinello. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
