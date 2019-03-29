const Contact = () => (
  <div className="contact">
    <h1>Get In Touch</h1>
    <p>
      <a href="tel:080-5464-0880">電話</a>
    </p>
    <p>
      <a href="mailto:misara2332@gmail.com">メール</a>
    </p>
    <div className="line">line</div>
    <p className="github">github</p>
    <p className="facebook">facebook</p>
    <p className="instagram">Instagram</p>
    <style jsx>{`
      h1 {
        margin: 70px;
        text-align: center;
      }
      .blue {
          position: fixed;
          top: 100%;
          width: 100vw;
          height: 100vh;
          z-index: 100;
          cursor: pointer;
          background-color: #2ca9e1;
        visibility: visible;
        animation: fadeBlue 0.3s linear 0s;
        animation-fill-mode: forwards;
        }
        @keyframes fadeBlue {
        0% {
          opacity: 1;
          visibility: visible;
        }
        100% {
          opacity: 0;
          visibility: hidden;
        }
        }
      .line {
        width: 30px;
        background-color: #01b901;
        border: 2px solid #01b901;
        border-radius: 0;
        color: #fff;
        padding: 4px 32px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      .line:hover {
        background-color: #fff;
        color: #55acee;
      }
    `}</style>
  </div>
)

export default Contact
