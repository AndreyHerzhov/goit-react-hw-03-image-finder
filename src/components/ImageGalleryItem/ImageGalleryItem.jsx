import { ListItem, ListItemImage } from "./ImageGalleryItem.styled"

export const ImageGaleryItem = ( {picture, desciption, id}) => {
    return (
        <ListItem> 
            <ListItemImage key={id} src={picture} alt={desciption} />
        </ListItem>
    );
  };
  
 


