import { Carousel } from '3d-react-carousal'

const slides = [
  <img src="https://picsum.photos/800/300/?random" alt="1" />,
  <img src="https://picsum.photos/800/301/?random" alt="2" />,
  <img src="https://picsum.photos/800/302/?random" alt="3" />,
  <img src="https://picsum.photos/800/303/?random" alt="4" />,
  <img src="https://picsum.photos/800/304/?random" alt="5" />
]

const Gallery = () => (
  <div className="gallery">
    <Carousel slides={slides} />
    <style jsx>{`
      h1 {
        margin: 70px;
        text-align: center;
      }
      img {
        cursor: pointer;
      }
    `}</style>
  </div>
)

export default Gallery
