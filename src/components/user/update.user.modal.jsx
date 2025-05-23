import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserApi } from "../../service/api.service";

const UpdateUserModal = (props) => {
    const [id, setId] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUsers } = props;

    useEffect(() => {
        console.log(">>>>> Check dataUpdate: ", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])
    const handelSubmitBtn = async () => {
        const res = await updateUserApi(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Update user successfully",
                description: `User ${fullName} has been update successfully`
            })
            resetAndClearModel()
            await loadUsers()
        } else {
            notification.error({
                message: "Update user failed",
                description: JSON.stringify(res.message)
            })
        }


    }
    const resetAndClearModel = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setId("")
        setPhone("")
        setDataUpdate(null)
    }


    return (<>
        <Modal
            title="Update a User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={() => handelSubmitBtn()}
            onCancel={() => resetAndClearModel()}
            maskClosable={false}
            okText="Update"
        >
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div><div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => {
                            setFullName(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}

                    />
                </div>
            </div>
        </Modal>
    </>);
}

export default UpdateUserModal;