import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className = 'tc'>
            <input
                className='pa2 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search contact list'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox