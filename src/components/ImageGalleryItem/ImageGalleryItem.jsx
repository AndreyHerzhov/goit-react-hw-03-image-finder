import { ListItem, ListItemImage } from "./ImageGalleryItem.styled"

export const ImageGaleryItem = ( {picture, desciption, id, showLargeImg}) => {
    return (
        <ListItem> 
            <ListItemImage id={id} src={picture} alt={desciption} onClick={showLargeImg}/>
        </ListItem>
    );
  };
  
 


