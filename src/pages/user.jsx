import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";
import { useEffect, useState } from 'react';
import { fetchAllUserApi } from '../service/api.service';

const UserPage = () => {
    const [dataUsers, setDataUser] = useState([])
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadUsers();
    }, [current, pageSize]);
    const loadUsers = async () => {
        const res = await fetchAllUserApi(current, pageSize);
        if (res.data) {
        setDataUser(res.data.result)
        setTotal(res.data.meta.total)
        setCurrent(res.data.meta.current)
        setPageSize(res.data.meta.pageSize)        
        }

    }
    return (
        <div style={{ margin: "20px" }}>
            <UserForm loadUsers={loadUsers}/>
            <UserTable 
            dataUsers={dataUsers} 
            loadUsers={loadUsers}
            current={current}
            pageSize={pageSize}
            total={total}
            setCurrent={setCurrent}
            setPageSize={setPageSize}   
            setTotal={setTotal}
            />
        </div>
    )
}

export default UserPage;