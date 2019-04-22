const Greeting = () => (
  <div className="greeting">
    <h2>Greeting</h2>
    <p>こんにちは、松土　慎太郎です。</p>
    <p>自然を愛し、小笠原諸島母島と八重山諸島波照間島に住んでいました。</p>
    <p>現在は、横浜で子育て奮闘中です。</p>
    <p>趣味はものづくりと旅とサッカーです。</p>

    <p>2018年からエンジニアとして働かせていただいております。</p>
    <p>詳細の経歴は以下の通りです。</p>
    <p>　2018年 1月～2018年 7月　　WEBサイト制作（HTML5, CSS3, JavaScript）</p>
    <p>　2018年 8月～2018年11月　　機械学習の設計・開発及びデータビジュアライゼーション</p>
    <p>　　　　　　　　　　　　　　　（Python, React.js, D3.js, PostgreSQL）</p>
    <p>　2018年12月～2019年 3月　　カスタマーサービスのためのSaaS開発</p>
    <p>　　　　　　　　　　　　　　　（React.js, Redux, Node.js(Express), MySQL）</p>
    <p>　2018年12月～　現　在　　　官公庁が使用する大規模webアプリケーション開発
    <p>　　　　　　　　　　　　　　　（HTML, CSS, JavaScript, Java(Spring), PostgreSQL）</p>

    <p>そのほか、Webデザイン（Figma）、画像編集（Illustrator・Photoshop）、動画制作（FinalCut）の経験があります。</p>
    <style jsx>{`
      .greeting {
        margin: 70px;
      }
      h2 {
        margin: 70px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Greeting
