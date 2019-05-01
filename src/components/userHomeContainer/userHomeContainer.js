import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import UserHome from "components/userHome/userHome";
import { getAllUserDesigns } from "sagas/ducks/user-design";

class UserHomeContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getAllUserDesigns());
    }

    render() {
        return <UserHome allUserDesigns={this.props.allUserDesigns} />;
    }
}

UserHomeContainer.propTypes = {
    allUserDesigns: PropTypes.object
};

const mapStateToProps = state => {
    console.log("Finally read:");
    console.log(state);
    return {
        allUserDesigns: state.allUserDesigns
    };
};

export default connect(mapStateToProps)(UserHomeContainer);
