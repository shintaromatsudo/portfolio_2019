import Confirm from './Confirm'
import ContactButton from './ContactButton'

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
        <form
          className="form"
          onSubmit={e => {
            this.handleConfirm(e)
          }}
        >
          {/* <p>お気軽にお問い合わせください。心よりお待ちしております。</p> */}
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
            <ContactButton type="submit" value="送信内容を確認する" />
          </div>
        </form>
        {/* <p>よくあるお問い合わせ</p> */}
        <div id="confirm" className="confirm">
          <Confirm state={this.state} />
        </div>
        <style jsx>{`
          #form {
          }
          .form {
            text-align: center;
          }
          input {
            font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
              Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN,
              Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳＰゴシック,
              MSPGothic, sans-serif;
            // background-color: #82cddd;
            border: solid 2px black;
            width: 300px;
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
            // background-color: #82cddd;
            border: solid 2px black;
            width: 300px;
            height: 100px;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
          }
          /* Google Chrome, Safari, Opera 15+, Android, iOS */
          ::-webkit-input-placeholder {
            // color: #9b72b0;
          }
          /* Firefox 18- */
          :-moz-placeholder {
            // color: #9b72b0;
            opacity: 1;
          }
          /* Firefox 19+ */
          ::-moz-placeholder {
            // color: #9b72b0;
            opacity: 1;
          }
          /* IE 10+ */
          :-ms-input-placeholder {
            // color: #9b72b0;
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
