import React from "react";
import PropTypes from 'prop-types'
import './SearchBar.css'

function SearchBar(props){

    const {searchtext, setSearchText} = props

    return(
        <div className="searchbar">
            <img src='assets/search.svg' alt="" /><input type="text" placeholder="Search product..." value={searchtext} onChange={(e) => { setSearchText(e.target.value) }} />
        </div>
    );

}

SearchBar.propTypes={
    searchtext:PropTypes.string,
    setSearchText:PropTypes.func
}

SearchBar.defaultProps={
    searchtext:"",
    setSearchText:()=>{}
}

export default SearchBar;