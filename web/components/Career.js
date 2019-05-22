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
      <p>2018年12月～2019年 3月　カスタマーサービスのためのSaaS開発</p>
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
    </div>
    <div className="careerContentsSp">
      <p>2018年 9月～2018年11月</p>
      <p>　　機械学習を用いたデータ分析・可視化の設計・開発</p>
      <p>
        　　　(Python, React.js, D3.js, postgreSQL)
        <br />
        <br />
      </p>
      <p>2018年12月～2019年 3月</p>
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
    </div>
    <style jsx>{`
      @media screen and (max-width: 1024px) {
        .careerContents {
          display: none;
        }
        .careerContentsSp {
          font-size: 8px;
          margin: auto 0;
        }
      }
      @media screen and (min-width: 1025px) {
        .careerContents {
          margin: auto 100px;
        }
        .careerContentsSp {
          display: none;
        }
      }
    `}</style>
  </React.Fragment>
)

export default Career
