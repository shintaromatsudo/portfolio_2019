const Greeting = () => (
  <div className="greetingContents">
    <div className="theWave">
      <img src="../static/img/TheWave.jpg" alt="TheWave" />
    </div>
    <div className="sentence">
      <p>こんにちは、松土　慎太郎です。</p>
      <p>自然と旅をこよなく愛する元公務員エンジニアです。</p>
      <p>小笠原諸島母島と八重山諸島波照間島に住んでいました。</p>

      <p>現在は横浜で子育てに奮闘中です。</p>
      <p>趣味はDIYとサッカーとカメラです。</p>
      <p>また、今年はマラソンとサーフィンにも挑戦中です。</p>
    </div>
    <style jsx>{`
      @media screen and (max-width: 1024px) {
        .greeting {
          margin: auto;
        }
        .greetingContents {
          margin: auto;
        }
        .theWave {
          width: 85%;
        }
        img {
          width: 100%;
          border-radius: 5px;
        }
        .sentence {
          position: absolute;
          top: 250px;
          font-size: 8px;
          font-weight: bold;
          color: white;
          margin-left: 5px;
        }
      }
      @media screen and (min-width: 1025px) {
        .greeting {
          margin: auto;
        }
        .greetingContents {
          display: flex;
        }
        .theWave {
          width: 400px;
          margin-left: auto;
        }
        img {
          width: 80%;
          border-radius: 5px;
        }
        .sentence {
          width: 500px;
          margin-top: 50px;
          margin-right: auto;
        }
      }
    `}</style>
  </div>
)

export default Greeting
