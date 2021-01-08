import React from 'react';


const Tweet = ({auteur,message}) => {




    return(
    <div>
        <h2>Nom : {auteur}</h2>
        <h3>{message}</h3>
        <button>Supprimer</button>
        <button>Like</button>
    </div>
    )

}


export default Tweet;