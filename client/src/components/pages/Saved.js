import React, { Component } from "react";
import axios from "axios";

class Saved extends Component {
  state = {
    savedBooks: [],
    savedModal: false
  };

  componentDidMount = () => {
    axios
      .get("/api/books")
      .then(response => {
        // console.log(response.data);
        this.setState({ savedBooks: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleRemove = id => {
    let removeId = id.target.value;
    // console.log("Id to remove "+removeId);
    axios
      .put(`/api/books/${removeId}`)
      .then(response => {
        console.log(response);
        this.setState({
          savedBooks: this.state.savedBooks.filter(each => {
            return each._id !== removeId;
          })
        });
        this.setState({ savedModal: true });
        console.log("Item Deleted");
      })
      .catch(err => {
        console.log(err);
      });
  };

  bookshow = () => {
    return this.state.savedBooks.map(each => {
      return (
        <div className="saved-book" key={each._id}>
          <div className="saved-top">
          <img src={each.image} alt={each.title} />
            <div className="saved-buttons">
              <button value={each._id} onClick={this.handleRemove}>
                Remove
              </button>
              <a href={each.link}>See Listing</a>
            </div>
           
          </div>
          <div>
            <p className="saved-title"> {each.title}</p>
            <p className="saved-author"> {each.authors}</p>
          </div>

          <p className="saved-description">{each.description}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="saved-container">
        <h1>Currently {this.state.savedBooks.length} Saved Books</h1>
        <div className="saved-books">
        {this.bookshow()}
        </div>
      </div>
    );
  }
  // End Component
}
export default Saved;
