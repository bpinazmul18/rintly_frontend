import { Component } from 'react';
import axios from 'axios';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts'
class App extends Component {
  state = {
    posts: []
  }

  async componentDidMount () {
    const {data: posts} = await axios.get(apiEndpoint)
    this.setState({ posts })
  }

  handleAdd = async () => {
    const obj = { title: 'a', body: 'b'}
    const {data: post} = await axios.post(apiEndpoint, obj)

    const posts = [post, ...this.state.posts]

    this.setState({ posts })
  }

  handleUpdate = () => {
  }

  handleDelete = () => {
    console.log('Handle delete fired')
  }

  render () {
    return (
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
                    <button onClick={() => this.handleUpdate()} className='btn btn-info btn-sm'>Update</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete()} className='btn btn-danger btn-sm'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
