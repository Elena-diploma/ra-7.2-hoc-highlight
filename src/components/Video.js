import { nanoid } from 'nanoid';
import React from 'react'
import PropTypes from 'prop-types'

export default function Video(props) {
    return (
        <div className="item item-video">
            <iframe
                title={nanoid(5)}
                src={props.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen>
            </iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
}