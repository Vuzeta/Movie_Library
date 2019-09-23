import React from 'react';
import './Pagination.scss';

import ReactPaginate from 'react-paginate';

const Pagination = ({ total_pages, changePage }) => {
	return (
		<div className="paginationWrappper">
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				breakLabel={'...'}
				pageCount={total_pages}
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				previousClassName={'pagination__previous'}
				nextClassName={'pagination__next'}
				breakClassName={'pagination__break'}
				pageClassName={'pagination__page'}
				containerClassName={'pagination'}
				subContainerClassName={'pages pagination'}
				activeClassName={'pagination__active'}
				onPageChange={changePage}
			/>
		</div>
	);
};

export default Pagination;
