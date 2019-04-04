import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import marvellogo from '../assets/marvellogo.jpg';


import { fetchAction } from '../actions/fetchAction';

class Cards extends Component {
    componentDidMount() {
        this.props.fetchAction('events');  //Call Action
    }

    render() {
        let postCharacters;
        let characters = this.props.characters.characters;
        if(characters !== undefined){
            console.log('Characters', characters);
            postCharacters = characters.map(character => (
                <div key={character.id} className="character-container">
                    <img src={character.thumbnail.path + '.jpg'} onError={(e) => { e.target.src=marvellogo; e.target.onerror = null}}
                        className="img-size" alt="comics" />
                    <p className="text-center text-white">{character.name}</p>
                </div>
            ));
        }
        
    return(
        <div className="characters-container">
            { postCharacters }
        </div>
        )
    }
}

Cards.propTypes = {
    fetchAction: PropTypes.func.isRequired,
    characters: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    characters: state.characters
});

export default connect(mapStatetoProps, { fetchAction })(Cards);
