import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { paginationAction } from '../actions/paginationAction';

class Pagination extends Component {
    constructor(props){
        super(props);
        this.state = {
            pager: {
                currentPage: 1,
                startPage: 1,
                endPage: 5
            }
        }
    }

    componentDidMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(1);
        }
    }

    getpage(totalItems, itemsPerPage, currentPage){
        itemsPerPage = 20;
        currentPage = currentPage || 1;

        var totalPages = Math.ceil(totalItems / itemsPerPage);

        var startPage, endPage;
        if (totalPages <= 5) {
            // less than 5 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 5 total pages so calculate start and end pages
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            itemsPerPage: itemsPerPage,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage
        }
    }

    setPage(currentPage){
        // console.log("Current Page",currentPage);
        let pager = this.state.pager;
        let itemsPerPage = 20;
        let totalItems = this.props.items.characters.length;

        pager = this.getpage(totalItems, itemsPerPage, currentPage);
        console.log("Pager Object",pager);
        
        this.props.paginationAction(pager);

        this.setState({ pager: pager });
    }

    createPages(){
        let pages = [];
        let pager = this.state.pager;
        for(var i = pager.startPage; i <= pager.endPage; i++){
            pages.push(<li key={i} id={i} 
                            className={pager.currentPage === i ? 'active' : ''}
                            onClick={(e) => {this.setPage(e.target.id)}}>{i}</li>);
        }
        console.log("Pages",pages);

        return pages;
    }

    render(){
        let pager = this.state.pager;
        let postPagination;
        // console.log("Pagination:",this.state.pager);
        if(this.props.items !== undefined){
        postPagination = (
                <ul className="pagination">
                    <li onClick={() => this.setPage(1)}>First</li>
                    <li onClick={() => this.setPage(pager.currentPage - 1)} className={pager.currentPage === 1 ? 'disabled' : ''}>Previous</li>     
        
                    {this.createPages()}

                    <li onClick={() => this.setPage(pager.currentPage + 1)} className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>Next</li>
                    <li onClick={() => this.setPage(pager.totalPages)}>Last</li>
                </ul>
            );
        }

        return (
            postPagination
        );
    }
}

Pagination.propTypes = {
    items: PropTypes.object.isRequired,
    paginationAction: PropTypes.func.isRequired
};


export default connect(null, { paginationAction })(Pagination);