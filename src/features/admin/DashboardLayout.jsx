import DashboardHeader from "../../ui/DashboardHeader"
import Loading from "../../ui/Loading"

function DashboardLayout() {
    // const { isLoading, proposals } = useProposals()

    // if (isLoading) return <Loading />

    return (
        <div>
            <DashboardHeader />
            {/* <Stats proposals={proposals} /> */}
        </div>
    )
}

export default DashboardLayout