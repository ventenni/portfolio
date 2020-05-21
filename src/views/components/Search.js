import React from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Style
import '../../assets/styles/components/search.scss';


const Search = () => {
	return (
		<div className="search">
			<div className="search__icon-box">
				<FontAwesomeIcon icon={faSearch} size="2x" />
			</div>
			<div className="search__text-box">
				<p>Discover</p>
				<input type="text" placeholder="Discover" />
			</div>
		</div>
	);
}

export default Search;