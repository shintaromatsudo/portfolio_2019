import LinkTop from '../components/LinkContactToTop'
import FadeOutColor from '../components/FadeOutColor'
import Form from '../components/FormGetInTouch'

const style = {
  backgroundColor: '#2ca9e1'
}

const Contact = () => {
  const url = sessionStorage.getItem('url')
  return (
    <div id="contact">
      <FadeOutColor style={style} />
      <div className="contact">
        <h2 className="getInTouch">Get In Touch</h2>
        <Form />
        {/* <p>
          <a href="tel:080-5464-0880">電話</a>
        </p>
        <p>
          <a href="mailto:misara2332@gmail.com">メール</a>
        </p>
        <div className="line">line</div>
        <p className="github">github</p>
        <p className="facebook">facebook</p>
        <p className="instagram">Instagram</p> */}
      </div>
      <LinkTop url={url} />
      <style jsx>{`
        #contact {
          width: 100vw;
          height: 100vh;
          background-color: #a0d8ef;
        }
        .contact {
          padding-top: 150px;
        }
        .getInTouch {
          font-size: 50px;
          margin: 0;
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
}

export default Contact
