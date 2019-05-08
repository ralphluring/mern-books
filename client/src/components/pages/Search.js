import React,{Component} from "react";
import SearchForm from ".././SearchForm";
import Results from ".././Results";
import axios from "axios";


class Search extends Component {
  state = {
    books:[],
    q:"",
    showModal:false
  }

  searchBooks = (query) => {
    let queryStr = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    axios.get(queryStr).then(res => {
      this.setState({books:res.data.items})
      // console.log(res.data.items[0].volumeInfo.title)
    }).catch(err=>{console.log(err)});
  };

  handleSave = (id) => {
    // console.log(id);
    var savedBook = this.state.books.filter(each => each.id === id);
    axios
    .post("/api/books", savedBook[0])
    .then(response => {
      console.log(response);
    
      
    })
    .catch(err=>{console.log(err)})
  }




  handleInputChange = event => {
    this.setState({
      q: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.q);
    this.setState({q:""})
  };

  render(){
    return (
      <div className="search-container">
          <SearchForm 
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.q}
          />
          <Results saveNotice={this.state.showModal}results={this.state} handleSave={this.handleSave}/>
      </div>
    );
  }
  
}

export default Search;