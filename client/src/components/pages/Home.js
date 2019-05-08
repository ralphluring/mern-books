import React,{Component} from "react";
import axios from "axios";
class Home extends Component{

  state = {
    savedBooks: [],
  
      title:"",
      author:"",
      img:"",
      link:"",
      description:""
    
  };

  componentDidMount = () => {
    axios
      .get("/api/books")
      .then(response => {
        // console.log(response.data);
        this.setState({ savedBooks: response.data });
        this.random();
      })
      .catch(err => {
        console.log(err);
      });
  };

  random = () => {
    let numbooks = this.state.savedBooks.length;
    let random =  Math.floor(Math.random() * numbooks);
     let featured = this.state.savedBooks[random];
   
       this.setState( {title:featured.title});
       this.setState( {author:featured.authors});
       this.setState( {img:featured.image});
       this.setState( {link:featured.link});
       this.setState( {decription:featured.description});

     
  }

  render(){
    
    return (
      <div className="home-container">
        <p>Currently {this.state.savedBooks.length} Books are saved.</p>
        <p>Search for books on the search page</p>
        <p>Save books you want </p>
        <p>Then Go see them on the saved page</p>
        <hr/>
        <h5>Random Book From the collection</h5>
        <p>{this.state.title}</p>
        <p>{this.state.author}</p>
        <img src={this.state.img} alt=""/>
        <a href={this.state.link}>Full listing</a>
        <p>{this.state.description}</p>
      </div>
    )
  }

}

export default Home;