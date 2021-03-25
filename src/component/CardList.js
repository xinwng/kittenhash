import React from 'react'
import Card from '../component/Card'

const CardList = ({ kittens }) => {
    return (
        <div>
            {
                kittens.map((user,i) => {
                    return (
                    <Card 
                        key={i} 
                        id={kittens[i].id} 
                        name={kittens[i].name}
                        username={kittens[i].username}
                        email={kittens[i].email}
                    />
                    );
                })
            }
        </div>
    );
}

export default CardList;