import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";

import UserHome from "components/userHome/userHome";
import { getAllUserDesigns } from "sagas/ducks/user-design";
import { fakeAuth } from "constants/fakeAuth";

class UserHomeContainer extends Component {
    componentDidMount() {
        console.log("Dispatch");

        this.props.dispatch(getAllUserDesigns());
    }

    render() {
        if (!fakeAuth.isAuthenticated) return <Redirect to="/login" />;

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
