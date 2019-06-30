import React from 'react'

const Career = () => (
  <React.Fragment>
    <div className="careerContents">
      <p>
        2018年 9月～2018年11月　機械学習を用いたデータ分析・可視化の設計・開発
      </p>
      <p>
        　　　　　　　　　　　　　　　　(Python, React.js, D3.js, postgreSQL)
      </p>
      <p>2018年11月～2019年 3月　カスタマーサービスのためのSaaS開発</p>
      <p>
        　　　　　　　　　　　　　　　　(React.js, Next.js, Redux,
        Node.js(Express), MySQL)
      </p>
      <p>
        2019年12月～　現　在　　官公庁が使用する大規模WEBアプリケーション開発
      </p>
      <p>
        　　　　　　　　　　　　　　　　(HTML, CSS, JavaScript, Java(Spring),
        postgreSQL)
      </p>

      <p>
        WEBデザイン(Figma)、画像編集(Illustrator,
        Photoshop)、動画制作(FinalCut)のお仕事もさせていただいたことがあります。
      </p>
      <a href="https://shintaromatsudo.github.io/" target="_blank">
        <button type="button">旧ポートフォリオ</button>
      </a>
    </div>
    <div className="careerContentsSp">
      <p>2018年 9月～2018年11月</p>
      <p>　　機械学習を用いたデータ分析・可視化の設計・開発</p>
      <p>
        　　　(Python, React.js, D3.js, postgreSQL)
        <br />
        <br />
      </p>
      <p>2018年11月～2019年 3月</p>
      <p>　　カスタマーサービスのためのSaaS開発</p>
      <p>
        　　　(React.js, Next.js, Redux, Node.js(Express), MySQL)
        <br />
        <br />
      </p>
      <p>2019年12月～　現　在　</p>
      <p>　　官公庁が使用する大規模WEBアプリケーション開発</p>
      <p>
        　　　(HTML, CSS, JavaScript, Java(Spring), postgreSQL)
        <br />
        <br />
      </p>
      <p>
        WEBデザイン(Figma)、画像編集(Illustrator, Photoshop)、
        <br />
        動画制作(FinalCut)のお仕事もさせていただいたことがあります。
      </p>
      <a href="https://shintaromatsudo.github.io/" target="_blank">
        <button type="button">旧ポートフォリオ</button>
      </a>
    </div>
    <style jsx>{`
      button :hover {
        background: black;
        color: white;
        border: solid 2px white;
      }
      @media screen and (max-width: 500px) {
        .careerContents {
          display: none;
        }
        .careerContentsSp {
          font-size: 8px;
          margin: auto 0;
        }
        button {
          width: 100px;
          height: 30px;
          font-size: 7px;
          margin: auto;
          padding: auto;
          display: inline-block;
          text-decoration: none;
          background: #fdeff2;
          color: black;
          border: solid 0.5px black;
          border-radius: 5px;
          transition: 0.4s;
        }
      }
      @media screen and (min-width: 501px) {
        .careerContents {
          width: 1000px;
          margin: auto;
        }
        .careerContentsSp {
          display: none;
        }
        button {
          width: 200px;
          height: 40px;
          margin: 10px;
          padding: 10px;
          display: inline-block;
          text-decoration: none;
          background: #fdeff2;
          color: black;
          border: solid 1px black;
          border-radius: 5px;
          transition: 0.4s;
        }
      }
    `}</style>
  </React.Fragment>
)

export default Career
