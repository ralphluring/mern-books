import React,{Component} from "react";

class Results extends Component {

  render(){
    console.log(this.props.saveNotice)
    return (
      <div className="results-container">
        {this.props.results.books.map(each => {
            return(
              <div key={each.id} className="result">
                <div className="result-header">
                <h1>{each.volumeInfo.title}</h1>
              
                <p>Author - {each.volumeInfo.authors}</p>
                
                </div>
                <div className="result-top">
                  <div className="result-image"><img src={ each.volumeInfo.imageLinks ? each.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/100"} alt={each.title}/></div>
                  <div className="result-save">
                    {!this.props.saveNotice && <button className="save-button" onClick={() => this.props.handleSave(each.id)}>Save</button>} 
                    <a href={each.volumeInfo.infoLink}> See Listing </a> 
                  </div>
                </div>
                
                <p>Description: {each.volumeInfo.description}</p>   
              </div>
            )    
          })
        }
      </div>
    );

  }

}

export default Results;
