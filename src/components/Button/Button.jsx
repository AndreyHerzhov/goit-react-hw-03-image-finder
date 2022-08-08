import { LoadMoreButton } from "./Button.styled";

export const Button = ({title, loadMore}) =>  {
    return (
        <LoadMoreButton onClick={loadMore}>{title}</LoadMoreButton>
    )
}