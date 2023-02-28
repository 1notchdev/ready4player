import TagItem from "./TagItem";

const TagItems = ({tags}) => {
    return (
        <div className="flex flex-wrap gap-2">
        {
            tags?.length > 0 && (
                <>
                    {
                        tags.map((tag, idx) => (
                            <TagItem key={idx}>{tag}</TagItem>
                        ))
                    }
                </>
            )
        }
        </div>
    )
}
export default TagItems;