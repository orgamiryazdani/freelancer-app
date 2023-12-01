import useUser from "../features/authentication/useUser"

function Header() {
    const { data } = useUser();
    return (
        <div className="bg-secondary-0 py-4 px-4">
            app header
        </div>
    )
}

export default Header