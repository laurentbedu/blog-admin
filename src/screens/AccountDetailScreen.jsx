import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AccountDetailScreen() {

    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://blog.api/appuser/"+id, {
                method: "POST",
                body: JSON.stringify({with:['account','role']})
            })
            .then(resp => resp.json())
            .then(json => {
                setUser(json)
            });
        

    }, [id]);

    return ( <>
        <h1>Détail de l'utilisateur : {user?.pseudo}</h1>
        <b>email :</b> {user?.account?.login}<br/>
        <b>role :</b> {user?.role?.title}
    </> );
}

export default AccountDetailScreen;