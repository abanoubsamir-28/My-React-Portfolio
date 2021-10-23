import myImg from "../../assests/img.bmp";
import img1 from "../../assests/skills/1.png";
import img2 from "../../assests/skills/2.png";
import img3 from "../../assests/skills/3.png";
import img4 from "../../assests/skills/4.png";
import img5 from "../../assests/skills/5.png";
import img6 from "../../assests/skills/6.png";
import img7 from "../../assests/skills/7.png";
import img8 from "../../assests/skills/8.png";
import img9 from "../../assests/skills/9.png";
import img10 from "../../assests/skills/10.png";
import img11 from "../../assests/skills/11.png";
import img12 from "../../assests/skills/12.png";
import img13 from "../../assests/skills/13.png";
import img14 from "../../assests/skills/14.png";
import img15 from "../../assests/skills/15.png";
import img16 from "../../assests/skills/16.png";
import img17 from "../../assests/skills/17.png";
import myResume from "../../assests/resume.pdf";
function HomeComponent() {
  return (
    <div className=" w-75 mx-auto my-5">
      <div className=" d-flex justify-content-between align-items-center">
        <div className="data p-3">
          <h1 className="text-muted fw-bolder">Abanoub Samir Shenouda</h1>
          <p className="text-muted">
            Frontend Developer that looking to leverage my experience building
            responsive and scalable web apps to solve interesting problems that
            delight end-users.
          </p>

          <div className="contact">
            <h5 className="text-primary fw-bold d-inline">
              <a
                href="https://www.linkedin.com/in/abanoubsamir98/"
                className="text-decoration-none"
              >
                Linkedin
              </a>
            </h5>
            <h5 className=" fw-bold d-inline mx-3">
              <a
                href="https://github.com/abanoubsamir-28"
                className="text-decoration-none text-warning"
              >
                GitHub
              </a>
            </h5>
            <h5 className="fw-bold d-inline mx-3">
              <a
                href="mailto:abanoubsamirshenouda@gmail.com"
                className="text-decoration-none text-danger"
              >
                Gmail
              </a>
            </h5>
            <h5 className="fw-bold d-inline mx-3">
              <a
                href="tel:+2001005434984"
                className="text-decoration-none text-black"
              >
                Phone
              </a>
            </h5>
          </div>
          <p className="fw-bold w-75 text-muted">
            Graduate student from College of Computer Science <br />
            Misr University for Science and Technology with
            <span className="text-primary"> CGPA :3.44</span>
          </p>
          <p className="fw-bold w-75 text-muted">
            Graduate student from Information Technology Institute - ITI
          </p>
          <div className="skils">
            <div className="images">
              <img src={img1} width="30" className="mx-1" alt="skill" />
              <img src={img2} width="30" className="mx-1" alt="skill" />
              <img src={img3} width="30" className="mx-1" alt="skill" />
              <img src={img4} width="30" className="mx-1" alt="skill" />
              <img src={img5} width="30" className="mx-1" alt="skill" />
              <img src={img6} width="30" className="mx-1" alt="skill" />
              <img src={img7} width="30" className="mx-1" alt="skill" />
              <img src={img8} width="30" className="mx-1" alt="skill" />
              <img src={img9} width="30" className="mx-1" alt="skill" />
              <img src={img10} width="30" className="mx-1" alt="skill" />
              <img src={img11} width="30" className="mx-1" alt="skill" />
              <img src={img12} width="30" className="mx-1" alt="skill" />
              <img src={img13} width="30" className="mx-1" alt="skill" />
              <img src={img14} width="30" className="mx-1" alt="skill" />
              <img src={img15} width="30" className="mx-1" alt="skill" />
              <img src={img16} width="30" className="mx-1" alt="skill" />
              <img src={img17} width="30" className="mx-1" alt="skill" />
            </div>
          </div>
          <a
            href={myResume}
            className="btn btn-primary my-4"
            download="abanoub samir resume.pdf"
          >
            Download Resume
          </a>
        </div>
        <figure className="w-50">
          <img src={myImg} className="w-100" alt="me" />
        </figure>
      </div>
    </div>
  );
}

export default HomeComponent;
