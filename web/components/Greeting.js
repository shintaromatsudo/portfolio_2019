const Greeting = () => (
  <div className="greetingContents">
    <div className="theWave">
      <img src="../static/img/TheWave2.jpg" alt="TheWave" />
    </div>
    <div className="sentence">
      <p>こんにちは、松土　慎太郎です。</p>
      <p>自然と旅をこよなく愛する元公務員エンジニアです。</p>
      <p>小笠原諸島母島と八重山諸島波照間島に住んでいたことがあります。</p>

      <p>現在は横浜で子育てに奮闘中です。</p>
      <p>趣味はDIYとサッカーとカメラです。</p>
      <p>また、今年はマラソンとサーフィンにも挑戦中です。</p>
    </div>
    <style jsx>{`
      .greeting {
        margin: auto;
      }
      .greetingContents {
        display: flex;
      }
      .theWave {
        width: 300px;
        margin-left: 100px;
      }
      img {
        width: 100%;
        border-radius: 5px;
      }
      .sentence {
        margin-top: 50px;
        margin-left: 70px;
      }
    `}</style>
  </div>
)

export default Greeting
