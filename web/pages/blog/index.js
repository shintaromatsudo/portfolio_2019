import React from 'react'
// import fetch from 'isomorphic-fetch'

// import Layout from '../../components/Layout'
// import Link from 'next/link'

// const PostLink = props => (
//   <li>
//     <Link as={`/blog/${props.id}`} href={`/blog/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// export default () => (
//   <Layout>
//     <h1>Blog</h1>
//     <ui>
//       <PostLink id="1" title="Shintaro" />
//       <PostLink id="2" title="Misa" />
//       <PostLink id="3" title="Sara" />
//     </ui>
//   </Layout>
// )

class Blog extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     console.log(props)
  //     this.state = {
  //       blogs: []
  //     }

  //     this.loadAjax = this.loadAjax.bind(this)
  //   }

  //   loadAjax() {
  //     return fetch(this.props.url)
  //       .then(response => response.json())
  //       .then(responseJson =>
  //         this.setState({
  //           blogs: responseJson.blogs
  //         })
  //       )
  //       .catch(error => {
  //         console.error(error)
  //       })
  //   }

  //   componentWillMount() {
  //     this.loadAjax()
  //   }

  render() {
    //     const blog_list = this.state.blogs.map(e => <li>{e.title}</li>)
    //     console.log(this.props)
    //     console.log(this.state)
    return (
      //       <React.Fragment>
      <h1>Blog</h1>
      //         <ul>{blog_list}</ul>
      //       </React.Fragment>
    )
  }
}

export default Blog
