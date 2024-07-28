export default function DashboardLayout ({
    children,
    notifications,
    users,
    revenue,
    login,

}:{
    children : React.ReactNode;
    notifications : React.ReactNode;
    users : React.ReactNode;
    revenue : React.ReactNode;
    login : React.ReactNode;
}) {
    const isLoggedIn = Math.floor(Math.random() * 4) >2 ? true : false;

    return isLoggedIn ?
    <>
    <div>{children}</div>
    <div className=" flex">
        <div className="flex flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
            {/* <div>{notifications}</div> */}
        </div>

        <div className="flex flex-1">{notifications}</div>
    </div>
    </>
    :  <>{login}</>

}