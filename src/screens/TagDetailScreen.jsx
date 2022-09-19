import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TagDetailScreen() {

    const {id} = useParams();
    const [tag, setTag] = useState(null);

    useEffect(() => {
        fetch("http://blog.api/tag/"+id)
            .then(resp => resp.json())
            .then(json => {
                setTag(json)
            });

    }, [id]);

    return ( <>
        <h1>Détail du mot-clé : {tag?.title}</h1>
    </> );
}

export default TagDetailScreen;