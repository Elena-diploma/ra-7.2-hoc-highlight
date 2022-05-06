import { nanoid } from 'nanoid';
import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video';
import Article from './Article';
import withViews from '../hoc/ViewsPretty';

const VideoComponent = withViews(Video);
const ArticleComponent = withViews(Article);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            default:
                return null;
            case 'video':
                return (
                    <VideoComponent {...item} key={nanoid(5)} />
                );
            case 'article':
                return (
                    <ArticleComponent {...item} key={nanoid(5)} />
                );
        }
    });
}

List.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            url: PropTypes.string,
            title: PropTypes.string,
            views: PropTypes.number.isRequired
        })
    )
}