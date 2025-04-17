import Button from "./Button";
import Footer from "./Footer";
import "../styles/about.css";

const About = (onNavigate) => {
  return (
    <div className="about">
      <main className="content">
        <h2>About Page</h2>
        <p>This Demo Shows Basic React Component</p>

        <div className="button-container">
          <Button
            text="Go Back!"
            backgroundColor="limegreen"
            onClick={() => onNavigate("home")}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default About;
