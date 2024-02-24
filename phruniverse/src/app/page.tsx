import Image from "next/image";
import Header from "@/components/header"
export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Phruniverse</title>
      <link rel="stylesheet" href="/style/main.css" />
      <Header />
      <div className="banner">
        <h1>Phruniverse</h1>
        <div className="tag-line">
          BESPOKE CINEMATOGRAPHY - MUSIC PRODUCTION - DIGITAL CONTENT CREATION
        </div>
      </div>
      <div className="clients">
        <h4 className="section-heading">Our Clients</h4>
        <div className="client-wrap">
          <div className="client-card">
            <div className="image">
              <img src="https://placehold.co/120" alt="" />
            </div>
            <div className="name">Client</div>
          </div>
          <div className="client-card">
            <div className="image">
              <img src="https://placehold.co/120" alt="" />
            </div>
            <div className="name">Client</div>
          </div>
          <div className="client-card">
            <div className="image">
              <img src="https://placehold.co/120" alt="" />
            </div>
            <div className="name">Client</div>
          </div>
          <div className="client-card">
            <div className="image">
              <img src="https://placehold.co/120" alt="" />
            </div>
            <div className="name">Client</div>
          </div>
        </div>
      </div>
      <div className="featured-video">
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          src="/images/1684162411043.mp4"
        />
      </div>
      <div className="common-section">
        <h4 className="section-heading">What We Do</h4>
        <div className="wrap">
          <div className="left">
            <ul>
              <li>
                <button>VIDEOGRAPHY</button>
              </li>
              <li>
                <button>MUSIC</button>
              </li>
              <li>
                <button>PHOTOGRAPHY</button>
              </li>
              <li>
                <button>PRE PRODUCTION</button>
              </li>
              <li>
                <button>POST PRODUCTION</button>
              </li>
            </ul>
          </div>
          <div className="right">
            <img src="/images/camera2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="common-section-2">
        <div className="wrap">
          <div className="left">
            <h5 className="section-heading">Get in Touch</h5>
            <div className="social-media">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <form action="">
              <div className="flex">
                <div className="input-wrapper">
                  <label htmlFor="fname">First Name</label>
                  <input required={true} type="text" name="fname" id="fname" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="lname">Last Name</label>
                  <input required={true} type="text" name="lname" id="lname" />
                </div>
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input required={true} type="text" name="email" id="email" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="message">Message</label>
                <textarea id="message" required={true} defaultValue={""} />
              </div>
              <div className="flex-center">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
}
