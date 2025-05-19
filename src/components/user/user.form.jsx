import create from "@ant-design/icons/lib/components/IconFont";
import Input from "antd/es/input/Input";
import { Button } from "antd/es/radio";
import axios from "axios";
import { useState } from "react";
import { createUserApi } from "../../service/api.service";
import { notification } from "antd";

const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const handelClickBtn = async () => {
        const res = await createUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "Create user successfully",
                description: `User ${fullName} has been created successfully`
            })
        } else {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(res.message)
            })
        }


    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
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
                        // value={fullName}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input onChange={(event) => {
                        setPhone(event.target.value);
                    }} />
                </div>
                <div>
                    <Button
                        onClick={handelClickBtn}
                        type="primary"> Create User </Button >
                </div>
            </div>
        </div>
    )
}

export default UserForm;