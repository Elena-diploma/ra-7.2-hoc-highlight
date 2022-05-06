import React from 'react'
import PropTypes from 'prop-types'

export default function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="/#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
}