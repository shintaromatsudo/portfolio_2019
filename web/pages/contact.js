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
