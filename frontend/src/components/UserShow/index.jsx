import { useSelector } from "react-redux";
import ReservationIndex from "../Reservations/ReservationIndex";
import "./UserShow.css"


const UserShow = () => {
    const reservations = useSelector(state => state.session.reservations)
    return(
        <div id="user-show-page">
            {/* only show the reservations if there are any */}
            {/* {reservations ?
            <div id="user-reservations-container">
                <div>My reservations are:</div>
                <ReservationIndex/>
            </div>
            : "It appears you don't have any reservations"} */}
             <div id="user-reservations-container">
                <div>My reservations are:</div>
                <ReservationIndex/>
            </div>
            <div id="user-likes-container">
                <div>My liked airbNZs are:</div>
            </div>
        </div>
    )
}

export default UserShow;
