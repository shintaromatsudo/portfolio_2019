import React from 'react'
import Title from '../components/Title'

const Complete = () => {
  const close = () => {
    console.log('close')
    window.close()
  }

  return (
    <React.Fragment>
      <Title title="complete" />
      <p>送信完了</p>
      <p>
        入力いただいたメールアドレスに自動的に送信完了メールを送信させていただきました。
      </p>
      <p>お問い合わせ番号</p>
      <button onClick={close}>このページを閉じる</button>
    </React.Fragment>
  )
}

export default Complete
