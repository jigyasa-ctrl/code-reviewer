import MarkdownPreview from '@uiw/react-markdown-preview';
import Loader from "./Loader"
interface ReviewProps {
    review: string;
    loading: Boolean
}

const Review: React.FC<ReviewProps> = ({
    review,
    loading
}) => {
    const source = review
    return (
        <div className="review-container">
            {loading ? <Loader/> :
            <MarkdownPreview source={source} style={{ backgroundColor: "333", fontSize: "30px", height: "100vh" , padding: 16,}} />}
        </div>
    );
};

export default Review;