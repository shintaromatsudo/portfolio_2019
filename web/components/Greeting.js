const Greeting = () => (
  <div className="greeting">
    <h2>Greeting</h2>
    <p>こんにちは、松土　慎太郎です。</p>
    <p>自然と旅をこよなく愛する元公務員エンジニアです。</p>
    <p>小笠原諸島母島と八重山諸島波照間島に住んでいたことがあります。</p>
    
    <p>現在は横浜で子育てに奮闘中です。</p>
    <p>趣味はDIYとサッカーとカメラです。</p>
    <p>また、今年はマラソンとサーフィンにも挑戦中です。</p>

    <p>エンジニアとしての経歴は以下の通りです。</p>
    <p>　2018年 1月～2018年 8月　WEBサイト制作(HTML, CSS, JavaScript(含ｊQuery))</p>
    <p>　2018年 9月～2018年11月　機械学習を用いたデータ分析・可視化の設計・開発</p>
    <p>　　　　　　　　　　　　　　(Python, React.js, D3.js, postgreSQL)</p>
    <p>　2018年12月～2019年 3月　カスタマーサービスのためのSaaS開発</p>
    <p>　　　　　　　　　　　　　　(React.js, Next.js, Redux, Node.js(Express), MySQL)</p>
    <p>　2019年12月～　現　在　　官公庁が使用する大規模WEBアプリケーション開発</p>
    <p>　　　　　　　　　　　　　　(HTML, CSS, JavaScript, Java(Spring), postgreSQL)</p>

    <p>WEBデザイン(Figma)、画像編集(Illustrator, Photoshop)、動画制作(FinalCut)のお仕事もさせていただいたことがあります。</p>
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
