import { ImageGalleryList } from "./ImageGallery.styled";
import { ImageGaleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

 

export const ImageGalery = ({pictures}) => {
    return (
        <ImageGalleryList> 
           {pictures.map(el => {
            return (
            <ImageGaleryItem 
                      picture={el.webformatURL} 
                      desciption={el.tags} 
                      key={el.id}/>
          )})}
        </ImageGalleryList>
    );
  };
  
 
 