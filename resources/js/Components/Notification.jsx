// Notification component
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
    const { props } = usePage(); // Access the latest props from Inertia
    const { notification } = props; // Destructure notification from props

    useEffect(() => {
        if (notification) {
            if (notification.success) {
                toast.success(notification.success);
            }
            if (notification.error) {
                toast.error(notification.error);
            }
            if (notification.info) {
                toast.info(notification.info);
            }
            if (notification.warning) {
                toast.warning(notification.warning);
            }
        }
    }, [notification]); // Only run this effect when notification changes

    return (
        <>
            <ToastContainer />
        </>
    );
};
// no
export default Notification;
