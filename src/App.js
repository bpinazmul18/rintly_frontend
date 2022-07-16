import { Component } from 'react';
import axios from 'axios';
class App extends Component {
  state = {
    posts: []
  }

  async componentDidMount () {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.setState({ posts: response.data })
  }

  handleUpdate = () => {
    console.log('Handle update fired')
  }

  handleDelete = () => {
    console.log('Handle delete fired')
  }

  render () {
    return (
      <div className='container'>
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
                    <button onClick={() => this.handleUpdate()} className='btn btn-primary btn-sm'>Update</button>
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
