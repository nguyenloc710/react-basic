import { Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../service/api.service';
import { useEffect, useState } from 'react';
const UserTable = () => {
    const [dataUser, setDataUser] = useState([])
    useEffect(() => {
        loadUsers();
    }, []);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const loadUsers = async () => {
        const res = await fetchAllUserApi()
        setDataUser(res.data)

    }
    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    );
}

export default UserTable;