import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, Table, notification, message } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserApi } from "../../service/api.service";

const UserTable = (props) => {
    const { dataUsers, loadUsers } = props;

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setdataDetail] = useState(null);
    const [detailOpen, setIsDetailOpen] = useState(false);

    const confirm = async (e) => {
        const res = await deleteUserApi(e)
        if (res) {
            notification.success({
                message: "Delete user successfully",
                description: `User id ${e} has been Delete successfully`
            })
            await loadUsers()
        } else {
            notification.error({
                message: "Delete user failed",
                description: JSON.stringify(res.message)
            })
        }
    };
    const cancel = e => {
        console.log(e);
        message.error('Click on No');
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => {
                        setdataDetail(record)
                        setIsDetailOpen(true)
                    }}>{record._id}</a >
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <EditOutlined onClick={() => {
                        setDataUpdate(record)
                        setIsModalUpdateOpen(true)
                    }} />
                    <Popconfirm
                        title="Delete the "
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(record._id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined />
                    </Popconfirm>

                </>

            ),
        },
    ];


    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                isModalUpdateOpen={isModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUsers={loadUsers}
            />
            <ViewUserDetail
                dataDetail={dataDetail}
                setdataDetail={setdataDetail}
                detailOpen={detailOpen}
                setIsDetailOpen={setIsDetailOpen}
            />
        </>
    );
}

export default UserTable;