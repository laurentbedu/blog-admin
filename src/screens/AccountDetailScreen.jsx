import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AccountDetailScreen() {

    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://blog.api/appuser/"+id)
            .then(resp => resp.json())
            .then(json => {
                setUser(json)
            });

    }, [id]);

    return ( <>
        <h1>Détail de l'utilisateur : {user?.pseudo}</h1>
    </> );
}

export default AccountDetailScreen;