import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";

import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
    const { isLoading, projects } = useOwnerProjects();

    if (isLoading) return <Loading />;

    if (!projects.length) return <Empty resourceName="پروژه" />;

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>دسته بندی پروژه</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>تگ ها</th>
                <th>فریلنسر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
                <th>درخواست ها</th>
            </Table.Header>
            <Table.Body>
                {
                    projects.map((project, index) => (
                            <ProjectRow key={project._id} project={project} index={index}/>
                    )
                    )
                }
            </Table.Body>
        </Table>
    )
}

export default ProjectTable