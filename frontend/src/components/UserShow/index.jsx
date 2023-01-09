import { useSelector } from "react-redux";
import "./UserShow.css"

const UserShow = () => {
    const reservations = useSelector(state => state.session.reservations)
    return(
        <div id="user-show-page">
            <div id="user-reservations-container">
                <div>My reservations are:</div>
            </div>
            <div id="user-likes-container">
                <div>My liked airbNZs are:</div>
            </div>
        </div>
    )
}

export default UserShow;
