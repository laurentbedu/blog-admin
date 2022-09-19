import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticleDetailScreen() {

    const {id} = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch("http://blog.api/article/"+id)
            .then(resp => resp.json())
            .then(json => {
                setArticle(json)
            });

    }, [id]);

    return ( <>
        <h1>Détail de l'article : {article?.title}</h1>
        <span>publié le : {new Date(article?.created_at).toLocaleString()}</span>
        <br/>
        <textarea disabled style={{width:'100%', resize: 'none'}} rows="6" defaultValue={article?.content}></textarea>
    </> );
}

export default ArticleDetailScreen;