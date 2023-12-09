import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table"
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProjects";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";

function ProjectRow({ project, index }) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const { removeProject } = useRemoveProject();

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{project.category.title}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                    {project.tags.map((tag) => (
                        <span key={tag} className="badge badge--secondary">
                            {tag}
                        </span>
                    ))}
                </div>
            </td>
            <td>{project.freelancer?.name || "-"}</td>
            <td>
                <ToggleProjectStatus project={project} />
            </td>
            <td>
                <div className="flex items-center gap-x-4">
                    <>
                        <button onClick={() => setIsEditOpen(true)}>
                            <TbPencilMinus className="w-5 h-5 text-primary-900" />
                        </button>
                        <Modal title={`ویرایش ${project.title}`} open={isEditOpen} onClose={() => setIsEditOpen(false)}>
                            <CreateProjectForm projectToEdit={project} onClose={() => setIsEditOpen(false)} />
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setIsDeleteOpen(true)}>
                            <HiOutlineTrash className="w-5 h-5 text-error" />
                        </button>
                        <Modal title={`حذف ${project.title}`} open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
                            <ConfirmDelete resourceName={project.title} onClose={() => setIsDeleteOpen(false)} onConfirm={() => removeProject(project._id, {
                                onSuccess: () => setIsDeleteOpen(false)
                            })} disabled={false} />
                        </Modal>
                    </>
                </div>
            </td>
        </Table.Row>
    )
}

export default ProjectRow