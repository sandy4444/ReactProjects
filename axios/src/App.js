import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import url from "./Config/config.json";
import http from "./Utils/utils";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    console.log("componentDidMount called");
    const { data } = await http.get(url.urlEndpoint);

    /* data.map((i) => {
      return null;
    }); */

    console.log(data === undefined);

    if (data !== undefined) {
      const posts = data;
      this.setState({ posts: posts, data });
    }
  }

  handleUpdate = async (post) => {
    const {data} = await http.put(url.urlEndpoint + "/" + post.id , post)
    console.log(data.body);
    console.log("Before click on Add: ", post);
    const temp = this.state.posts;
    // console.log(temp.indexOf(post));
    console.log("After :");
    temp[temp.indexOf(post)].title = "Body Updated";
    //console.log(temp[temp.indexOf(post)]);
    this.setState({ posts: temp });
  };

  handleDelete = async(post) => {
    console.log(await http.delete(url.urlEndpoint + "/" + post.id));
    var temp  = this.state.posts;

    temp = temp.filter((item) => {
      console.log(temp); 
      return item.id !== post.id

      });
    
    this.setState({posts : temp});


  };

  render() {
    console.log("render called");
    return (
      <React.Fragment>
        {console.log("return called")}
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <div>
          <br></br>
        </div>
        <div className = "container">
        <table className="table table-info ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
