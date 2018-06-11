import {connect} from 'react-redux';
import {addUser, removeUser} from '../actions';
import UserButtons from '../components/UserButtons'

function mapDispactchToProps(dispatch){
    return {
        add: function(user){
            let action = addUser(user)
            dispatch(action);
        },
        remove: function(){
            let action = removeUser()
            dispatch(action);
        }
    }
}

export default connect(null, mapDispactchToProps)(UserButtons);