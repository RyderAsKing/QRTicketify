import Notification from "@/Components/Notification";

const GeneralLayout = ({ children }) => {
    return (
        <>
            {children}
            <Notification />
        </>
    );
};

export default GeneralLayout;
