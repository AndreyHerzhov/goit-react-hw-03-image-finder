import React, { Component } from "react";
import   SearchBar  from "./Searchbar/Searchbar";
import PhotoApiService from "components/services/picture-api";
import { ImageGalery } from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Notiflix from 'notiflix';

const photoApiService = new PhotoApiService()

export class App extends Component {
  state = {
    inputValue: '',
    pictures: [],
    showModal: false,
    src: ''
    
  }

 handleFormSubmit = inputValue => {
    this.setState({inputValue: inputValue})
    photoApiService.query = inputValue
    photoApiService.fetchPhotos()
    .then(data => this.setState({
          pictures: data.hits
        }) 
    )
  }

  toggleModal = (e) => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }
 
  handleClick = (e) => {
    Notiflix.Loading.standard();
    const pictureId = Number(e.currentTarget.id)
    const imageToOpen = this.state.pictures 
    const img = imageToOpen.find(option => option.id === pictureId);
    const largeImageUrl = img.largeImageURL
    this.setState(({showModal}) => ({
      showModal: !showModal,
      src: largeImageUrl
    }))
    Notiflix.Loading.remove();
  }
 
  
  render() {
    const { pictures, src } = this.state
     
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ImageGalery pictures={pictures}  showLargeImg={this.handleClick}/> 
        {this.state.showModal && 
        <Modal 
            src={src} 
            alt='Alternative'
            onClose={this.toggleModal}
            />}
        
      </div>
    )
  }
}

 
