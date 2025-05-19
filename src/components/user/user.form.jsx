import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserApi } from "../../service/api.service";

const UserForm = (props) => {
    const { loadUsers } = props;

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handelSubmitBtn = async () => {
        const res = await createUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "Create user successfully",
                description: `User ${fullName} has been created successfully`
            })
            resetAndClearModel()
            await loadUsers()
        } else {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(res.message)
            })
        }


    }
    const resetAndClearModel = () => {
        setIsModalOpen(false)

        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table User</h3>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    type="primary"> Create User </Button >
            </div>
            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => handelSubmitBtn()}
                onCancel={() => resetAndClearModel()}
                maskClosable={false}
                okText="Create"
            >
                <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input
                            // value={fullName}
                            onChange={(event) => {
                                setFullName(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            // value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password onChange={(event) => {
                            // value={password}
                            setPassword(event.target.value);
                        }} />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input onChange={(event) => {
                            // value={phone}
                            setPhone(event.target.value);
                        }} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UserForm;