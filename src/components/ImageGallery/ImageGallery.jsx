import { ImageGalleryList } from "./ImageGallery.styled";
import { ImageGaleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

 

export const ImageGalery = ({pictures, onClick, showLargeImg}) => {
    return (
        <ImageGalleryList onClick={onClick}> 
           {pictures.map(el => {
            return (
            <ImageGaleryItem 
                      id={el.id}
                      picture={el.webformatURL} 
                      desciption={el.tags} 
                      key={el.id}
                      showLargeImg={showLargeImg}
                      />

          )})}
        </ImageGalleryList>
    );
  };
  
 
 