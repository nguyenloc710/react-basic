import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";
import { useEffect, useState } from 'react';
import { fetchAllUserApi } from '../service/api.service';

const UserPage = () => {
    const [dataUsers, setDataUser] = useState([])
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const res = await fetchAllUserApi()
        setDataUser(res.data)

    }
    return (
        <div style={{ margin: "20px" }}>
            <UserForm loadUsers={loadUsers}/>
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage;