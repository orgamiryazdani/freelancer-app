import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {

    return (
        <div className="grid grid-cols-3 gap-x-8">
            <Stat
                color="orange"
                title="کابران"
                value={users}
                icon={<HiUser className="w-20 h-20" />}
            />
            <Stat
                color="primary"
                title="درخواست ها"
                value={proposals}
                icon={<HiOutlineViewGrid className="w-20 h-20" />}
            />
            <Stat
                color="green"
                title="پروژه ها"
                value={projects}
                icon={<HiCollection className="w-20 h-20" />}
            />
        </div>
    )
}

export default Stats