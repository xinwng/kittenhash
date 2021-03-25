import React from 'react';
const Card = ({name, username, email, id}) => {
    return (
        <div className = 'tc bg-light-red dib br4 pa4 ma4 grow bw2 shadow-3'>
        <img alt='kittens' src={`https://robohash.org/${id}?set=set4`} />
            <div>
                <h2>{name}</h2>
                <p>Username: {username}</p>
                <p>E-mail: {email}</p>
            </div>
            
        </div>

    );
}

export default Card;