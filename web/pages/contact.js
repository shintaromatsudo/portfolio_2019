const Contact = () => (
  <div className="contact">
    <h1>Get In Touch</h1>
    <p><a href="tel:080-5464-0880">ìdòb</a></p>
    <p><a href="mailto:misara2332@gmail.com">ÉÅÅ[Éã</a></p>
    <div className="line">line</div>
    <p>github</p>
    <p>facebook</p>
    <p>Instagram</p>
    <style jsx>{`
      h1 {
        margin: 70px;
        text-align: center;
      }
      .line {
  background-color: #01b901;
  border: 2px solid #01b901;
  border-radius: 0;
  color: #fff;
  padding:4px 32px;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.line:hover {
  background-color: #fff;
  color: #55acee;
}
    `}</style>
  </div>
)

export default Contact