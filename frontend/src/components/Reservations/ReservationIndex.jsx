import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, getReservations } from "../../store/reservations";
import ReservationIndexItem from "./ReservationIndexItem";
import './Reservation.css';

const ReservationIndex = () => {
    const dispatch = useDispatch();
    const reservations = useSelector(getReservations);

    useEffect(() => {
        dispatch(fetchReservations());
    }, [])


    return(
        <>
            <div id="all-reservations">
                {/* <div>Hello from reservations</div> */}
                {reservations.map((reservation) => <ReservationIndexItem reservation={reservation} key={reservation.id}/> )}
            </div>
        </>
    )
}

export default ReservationIndex;
