const Greeting = () => (
  <div className="greeting">
    <h2>Greeting</h2>
    <div className="greetingContents">
      <p>こんにちは、松土　慎太郎です。</p>
      <p>自然と旅をこよなく愛する元公務員エンジニアです。</p>
      <p>小笠原諸島母島と八重山諸島波照間島に住んでいたことがあります。</p>

      <p>現在は横浜で子育てに奮闘中です。</p>
      <p>趣味はDIYとサッカーとカメラです。</p>
      <p>また、今年はマラソンとサーフィンにも挑戦中です。</p>
    </div>
    <style jsx>{`
      .greeting {
      }
      .greetingContents {
        margin: auto 100px;
      }
    `}</style>
  </div>
)

export default Greeting
