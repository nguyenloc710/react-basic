import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, Table, notification, message } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserApi } from "../../service/api.service";

const UserTable = (props) => {
    const { dataUsers, loadUsers,
        current, pageSize, total,
        setCurrent, setPageSize, setTotal
    } = props;

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
            title: "STT",
            render: (_, __, index) => {
                return (
                    <>{(index + 1) + (current - 1)*pageSize}</>
                )
            }
        },
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

    const onChange = (pagination, filters, sorter, extra) => {
        if(pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current);
            }
        }
        if(pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize);
            }
        }
        
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"}
                pagination={{
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total}</div>) }
                }}
                onChange={onChange}
            />
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
                loadUsers={loadUsers}
            />
        </>
    );
}

export default UserTable;