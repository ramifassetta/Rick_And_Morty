import "./About.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import rickandmorty from "../../images/rickandmorty.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import css from "../../images/css.png";
import node from "../../images/nodejs.png";

export const About = () => {
  return (
    <div
      style={{
        borderRadius: "10px",
        height: "800px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <div className="aboutme">
        <img src={rickandmorty} alt="" style={{ height: "250px" }} />
        <div className="name">
          <p style={{ marginBottom: "10px", marginTop: "0px" }}>Made with ❤️ by:</p>
          <h3 style={{fontFamily: "cursive"}}>Ramiro Fassetta</h3>
        </div>
        <div style={{marginTop: "75px", marginBottom: "15px"}}>
          <p className="techsycontact">Techs:</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "auto",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "15px",
            }}
          >
            <img
              src={react}
              alt=""
              style={{ height: "75px", marginRight: "20px" }}
            />
            <img
              src={redux}
              alt=""
              style={{ height: "75px", marginRight: "20px" }}
            />
            <img
              src={css}
              alt=""
              style={{ height: "75px", marginRight: "20px" }}
            />
            <img
              src={node}
              alt=""
              style={{ height: "75px", marginRight: "20px" }}
            />
          </div>
          <p className="techsycontact">Contact:</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "auto",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "15px",
            }}
          >
            <a href="https://github.com/ramifassetta" target="_blank">
              <img
                src={github}
                alt=""
                style={{ height: "75px", marginRight: "20px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/ramiro-fassetta/" target="_blank">
              <img src={linkedin} alt="" style={{ height: "75px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
