import PageLink from './PageLink'

const PageLinks = () => {
  
  const hoverAbout = () => {
     console.log("Pink")
    const pink = document.getElementById('pink')
    pink.classList.add('hoverPink')
  }
  
  const about = () => {
    console.log("About")
  }
  const blog = () => {
    console.log("Blog")
  }
  const contact = () => {
    console.log("Contact")
  }
  
  
  
  return (
  <div>
    <div id="pink" className="pink"></div>
    <PageLink className="about" href="about" name="About" onClick={about} onMouseEnter={hoverAbout}/>
    <PageLink className="blog" href="blog" name="Blog" onClick={blog} />
    <PageLink className="contact" href="contact" name="Contact" onClick={contact} />
    <style jsx>{`
      .pink {
        witdh: 100px;
        height: 20px;
        background-color: pink;
        visible: hidden;
      }
      .hoverPink {
      visible: visible;
        animation: bounceColor 2.5s linear 0s 1;
      }
      @keyframes bounce {
        0%   { transform: scaleY(0); }
        5%   { transform: scaleY(0.40); }
        25%  { transform: scaleY(0.10); }
        30%  { transform: scaleY(0.35); }
        35%  { transform: scaleY(0.15); }
        45%  { transform: scaleY(0.30); }
        50%  { transform: scaleY(0.20); }
        60%  { transform: scaleY(0.28); }
        65%  { transform: scaleY(0.22); }
        75%  { transform: scaleY(0.27); }
        100% { transform: scaleY(0.25); }
      }
      .about {
        position: fixed;
        left: 10px;
        top: 300px;
        transform: rotate(-90deg);
      } 
      .blog {
        position: fixed;
        right: 10px;
        top: 300px;
        transform: rotate(90deg);
      }
      .contact {
        position: fixed;
        left: 5000px;
        bottom: 10px;
      }
      .about :hover{
        animation: bounce 2.5s linear 0s 1;
      }
      .blog :hover{
        animation: bounce 2.5s linear 0s 1;
      }
      .contact :hover{
        animation: bounce 2.5s linear 0s 1;
      }
      @keyframes bounce {
        0%   { transform: translate(0%, 0%); }
        5%   { transform: translate(40%, 0%); }
        25%  { transform: translate(10%, 0%); }
        30%  { transform: translate(35%, 0%); }
        35%  { transform: translate(15%, 0%); }
        45%  { transform: translate(30%, 0%); }
        50%  { transform: translate(20%, 0%); }
        60%  { transform: translate(28%, 0%); }
        65%  { transform: translate(22%, 0%); }
        75%  { transform: translate(27%, 0%); }
        100% { transform: translate(25%, 0%); }
      }
    `}</style>
  </div>
)
}

export default PageLinks
