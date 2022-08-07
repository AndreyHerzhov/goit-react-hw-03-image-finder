import React, { Component } from "react";
import   SearchBar  from "./Searchbar/Searchbar";
import PhotoApiService from "components/services/picture-api";
import { ImageGalery } from "./ImageGallery/ImageGallery";
// import { ImageGaleryItem } from "./ImageGalleryItem/ImageGalleryItem";
 
const photoApiService = new PhotoApiService()

export class App extends Component {
  state = {
    inputValue: '',
    pictures: []
  }

 handleFormSubmit = inputValue => {
    this.setState({inputValue: inputValue})
    photoApiService.query = inputValue
    photoApiService.fetchPhotos()
    .then(data => this.setState({pictures: data.hits}) )
    
    
  }

  
  render() {
    const { pictures } = this.state
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit}/>
         
         <ImageGalery pictures={pictures}/> 
         
      </div>
    )
  }
}

 
