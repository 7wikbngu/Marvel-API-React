import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import marvellogo from '../assets/marvellogo.jpg';

import Loading from './Loading';
import Pagination from './Pagination';
import { fetchAction } from '../actions/fetchAction';
import { paginationAction } from '../actions/paginationAction';

class Cards extends Component {
    componentDidMount() {
        this.props.fetchAction('events');  //Call Action
    }

    render() {
        let postitems;
        let items = this.props.items.characters;
        let paginationItems;
        let startIndex = this.props.index.startIndex;
        let endIndex = this.props.index.endIndex;

        console.log("Cards.js",[startIndex,endIndex]);
        
        if(items !== undefined){
            paginationItems = items.slice(startIndex, endIndex + 1);
            postitems = paginationItems.map(item => (
                <div key={item.id} className="item-container">
                    <img src={item.thumbnail.path + '.jpg'} onError={(e) => { e.target.src=marvellogo; e.target.onerror = null}}
                        className="img-size" alt="comics" />
                    <p className="text-center text-white text-uppercase font-weight-bold mt-2">{item.name || item.title}</p>
                </div>
            ));
        // }else if(this.props.errorCheck){
        //     postitems = (
        //         <div className="gifHolder">
        //             <iframe title="GIF" src="https://giphy.com/embed/1zSz5MVw4zKg0" width="100%" height="100%" className="gifStyle giphy-embed" frameBorder="0" allowFullScreen></iframe>
        //         </div>
        //     );
        }else {
            postitems = (
                <Loading />
            );
        }
        
    return(
        <Fragment>
            <section className="items-container pt-5">
                { postitems }
            </section>
            <Pagination items={this.props.items}/>
        </Fragment>
        )
    }
}

Cards.propTypes = {
    fetchAction: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    index: PropTypes.object,
    errorCheck: PropTypes.bool
};

const mapStatetoProps = state => ({
    items: state.items,
    index: state.pager.index,
    errorCheck: state.pager.error
});

export default connect(mapStatetoProps, { fetchAction, paginationAction })(Cards);
