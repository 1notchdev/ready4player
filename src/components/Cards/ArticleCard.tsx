const ArticleCard = ({article, ...props}) => {
    return (
        <div className="bg-transparent flex flex-col w-full rounded-md overflow-hidden">
            <img src={article.image}
                className="w-full object-cover object-center rounded-md"
                alt={article.name} />
            <div className="text-white/70 mt-5">
                <p className="text-xs">{article.posted_at}</p>
                <p className="font-semibold text-lg my-2">{article.name}</p>
                <p className="text-sm">{article.description}</p>
            </div>

        </div>
    )
}
export default ArticleCard;