import React from 'react'

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
}

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
}

const withViews = (Component) => class extends React.Component {
    render() {
        if (this.props.views < 0) {
            return null
        } else if (this.props.views <= 100) {
            return (
                <New>
                    <Component {...this.props} />
                </New>
            )
        } else if (this.props.views >= 1000) {
            return (
                <Popular>
                    <Component {...this.props} />
                </Popular>
            )
        } else {
            return <Component {...this.props} />;
        }
    }
};

export default withViews;