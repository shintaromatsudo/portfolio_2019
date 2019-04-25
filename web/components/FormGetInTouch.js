import Confirm from './Confirm'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      title: '',
      message: ''
    }
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value })
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  handleChangeMessage(e) {
    this.setState({ message: e.target.value })
  }

  handleConfirm(e) {
    e.preventDefault()
    const confirm = document.getElementById('confirm')
    confirm.classList.remove('confirm')
  }

  render() {
    const { name, email, title, message } = this.state
    return (
      <div id="form">
        <p>お気軽にお問い合わせください。心よりお待ちしております。</p>
        <form
          onSubmit={e => {
            this.handleConfirm(e)
          }}
        >
          <div className="form">
            <label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={e => this.handleChangeName(e)}
                value={name}
              />
            </label>
          </div>
          <div className="form">
            <label>
              <input
                type="email"
                name="email"
                placeholder="MailAddress"
                required
                onChange={e => this.handleChangeEmail(e)}
                value={email}
              />
            </label>
          </div>
          <div className="form">
            <label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={e => this.handleChangeTitle(e)}
                value={title}
              />
            </label>
          </div>
          <div className="form">
            <label>
              <textarea
                name="message"
                placeholder="Message"
                onChange={e => this.handleChangeMessage(e)}
                value={message}
              />
            </label>
          </div>
          <div>
            <button type="submit">送信内容を確認する</button>
          </div>
        </form>
        <div id="confirm" className="confirm">
          <Confirm state={this.state} />
        </div>
        <style jsx>{`
          #form {
            text-align: center;
            background-color: #00afcc;
          }
          h2 {
            color: #9b72b0;
          }
          p {
            color: #9b72b0;
          }
          input {
            font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
              Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN,
              Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳＰゴシック,
              MSPGothic, sans-serif;
            background-color: #82cddd;
            border: solid 2px #9b72b0;
            width: 300px;
            height: 20px;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
          }
          select {
            font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
              Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN,
              Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳＰゴシック,
              MSPGothic, sans-serif;
            background-color: #82cddd;
            border: solid 2px #9b72b0;
            width: 320px;
            height: 20px;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
          }
          textarea {
            font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
              Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN,
              Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳＰゴシック,
              MSPGothic, sans-serif;
            background-color: #82cddd;
            border: solid 2px #9b72b0;
            width: 300px;
            height: 100px;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
          }
          /* Google Chrome, Safari, Opera 15+, Android, iOS */
          ::-webkit-input-placeholder {
            color: #9b72b0;
          }
          /* Firefox 18- */
          :-moz-placeholder {
            color: #9b72b0;
            opacity: 1;
          }
          /* Firefox 19+ */
          ::-moz-placeholder {
            color: #9b72b0;
            opacity: 1;
          }
          /* IE 10+ */
          :-ms-input-placeholder {
            color: #9b72b0;
          }
          button {
            width: 320px;
            height: 40px;
            margin: 10px;
            padding: 10px;
            display: inline-block;
            text-decoration: none;
            color: #9b72b0;
            border: solid 2px #9b72b0;
            border-radius: 5px;
            transition: 0.4s;
          }
          button :hover {
            background: #9b72b0;
            color: white;
            cursor: pointer;
          }
          .confirm {
            display: none;
          }
        `}</style>
      </div>
    )
  }
}

export default Form
