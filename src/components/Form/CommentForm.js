import { Textarea, WrapItem } from '@chakra-ui/react';

const CommentForm = ({ handleChange, form }) => {
    return(
    <>
        <WrapItem>
            <Textarea placeholder="Comentario..." name="comment" onChange={handleChange} value={form.comment} />
        </WrapItem>
    </>
    );
}

export default CommentForm;