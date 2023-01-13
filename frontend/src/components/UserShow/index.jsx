import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReservations } from "../../store/reservations";
import ReservationIndex from "../Reservations/ReservationIndex";
import "./UserShow.css"


const UserShow = () => {
    const reservations = useSelector(state => state.reservations);
    const dispatch = useDispatch();
    const {userId} = useParams();
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(fetchReservations());
    }, [])

    if(!reservations){
        return null;
    }

    return(
        <div id="user-show-page">
                 <div id="user-reservations-container">
                {Object.values(reservations).length > 0 ?
                    <p className="title-show">Woohoo! Get excited for your upcoming reservations:</p>
                    :  <p className="title-show">You currently have no upcoming reservations. If you would like to make one, please go to the home page!</p>
                }
                <ReservationIndex/>
            </div>
            {/* <div id="user-likes-container">
                <div>My liked airbNZs are:</div>
            </div> */}
        </div>
    )
}

export default UserShow;
