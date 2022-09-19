import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ArticleScreen() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://blog.api/article")
            .then(resp => resp.json())
            .then(json => {
                json = json.sort((a,b) => {
                    return a.created_at.toLowerCase() < b.created_at.toLowerCase() ? 1 : -1
                });
                setArticles(json)
            });

    }, [])

    const navigate = useNavigate();

    return ( <>
        <h1>Liste des articles</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">titre</th>
                    <th scope="col">date publication</th>
                    <th scope="col">actions</th>
                </tr>
            </thead>
            <tbody>
                {articles.map(article => {
                    return(<tr key={article.Id_article} onClick={()=>{navigate(`/article/${article.Id_article}`);}}>
                        <td>{article.title}</td>
                        <td>{new Date(article.created_at).toLocaleString()}</td>
                        <td></td>
                    </tr>);
                })}
            </tbody>
        </table>
    </> );
}

export default ArticleScreen;