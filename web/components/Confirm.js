import Router from 'next/router'
import axios from 'axios'

const Confirm = props => {
  const state = props.state
  const { name, email, title, message } = state
  const handleSubmit = e => {
    e.preventDefault()
    const data = state
    console.log(data)
    // axios({
    //   method: 'POST',
    //   url: '/api/contact',
    //   params: data
    // })
    window.open('/complete');
    Router.push(`/`)
  }
  return (
    <div className="c">
      <p>入力内容の確認</p>
      <form
        onSubmit={e => {
          handleSubmit(e)
        }}
      >
        <p>{name}</p>
        <p>{email}</p>
        <p>{title}</p>
        <p>{message}</p>
        <button type="submit">送信する</button>
      </form>
      <style jsx>{`
        .c {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #00afcc;
        }
      `}</style>
    </div>
  )
}

export default Confirm
