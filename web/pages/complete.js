import React from 'react'
import ContactButton from '../components/ContactButton'

const Complete = () => {
  const close = () => {
    window.close()
  }

  return (
    <div id="complete">
      <h2>送信完了</h2>
      {/* <p>
        入力いただいたメールアドレスに自動的に送信完了メールを送信させていただきました。
      </p>
      <p>お問い合わせの回答につきましては追ってご連絡いたします。</p> */}
      <p>お問い合わせありがとうございます。</p>
      <p>できる限り早く返信いたします。</p>
      <div onClick={() => close()}>
        <ContactButton type="button" value="このページを閉じる" />
      </div>
      <style jsx>{`
        #complete {
          margin: auto;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Complete
