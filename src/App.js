import React, { Component } from 'react';
import http from './services/http';
import config from '../src/config.json'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
  state = {
    posts: []
  }

  async componentDidMount () {
    const {data: posts} = await http.get(config.apiEndpoint)
    this.setState({ posts })
  }

  handleAdd = async () => {
    const obj = { title: 'a', body: 'b'}
    const {data: post} = await http.post(config.apiEndpoint, obj)

    const posts = [post, ...this.state.posts]

    this.setState({ posts })
  }

  handleUpdate = async (post) => {
    post.title = 'update'
    await http.patch(`${config.apiEndpoint}/${post.id}`, post)

    const posts = [...this.state.posts]
    const index = posts.indexOf(post)
    posts[index] = {...post}

    this.setState({ posts })
  }

  handleDelete = async (post) => {
    const originalPosts = this.state.posts
    // Immediatly remove ui
    const posts = this.state.posts.filter(p => p.id !== post.id)
    this.setState({ posts})

    // api call
    try {
      await http.delete(`${config.apiEndpoint}/${post.id}`)
    } catch(ex) {
      // show alert to the user
      if (ex.response && ex.response.status === 404)
        alert('this post already been deleted!')
      // revert the posts
      this.setState({ posts: originalPosts })
    }

  }

  render () {
    return (
      <React.Fragment>
        <ToastContainer/>
        <div className='container'>
          <button onClick={() => this.handleAdd()} className='btn btn-primary btn-sm'>Add Post</button>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.posts.map(post => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>
                      <button onClick={() => this.handleUpdate(post)} className='btn btn-info btn-sm'>Update</button>
                    </td>
                    <td>
                      <button onClick={() => this.handleDelete(post)} className='btn btn-danger btn-sm'>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
