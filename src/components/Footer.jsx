import "../styles/footer.css";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Our React App.</p>
      <p>Created For React Learning Demo.</p>
    </footer>
  );
};
export default Footer;
