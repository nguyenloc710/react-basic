import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { handelUpdateFile, updateUserAvaterApi } from '../../service/api.service';
const ViewUserDetail = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const { dataDetail, setdataDetail, detailOpen, setIsDetailOpen, loadUsers } = props;
    const handelOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            selectedFile(null);
            setPreview(null);
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);

        }
        console.log(">>> check file: ", preview);

    }
    const handelUpdateUserAvatar = async () => {
        console.log(">>> check preview: ", preview);
        const resUpload = await handelUpdateFile(selectedFile, "avatar");
        if (resUpload.data) {
            // Assuming resUpload.data contains the updated user data
            const newAvatar = resUpload.data.fileUploaded;
            const resUpdateUser = await updateUserAvaterApi(
                newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone
            );
            console.log(">>> newAvatar: ", newAvatar);
            if (resUpdateUser.data) {
                setIsDetailOpen(false)
                setSelectedFile(null);
                setPreview(null);
                await loadUsers();
                notification.success({
                    message: "Update User Avatar",
                    description: "Update user avatar successfully"
                });
            } else {
                notification.error({
                    message: "Error Update User Avatar",
                    description: JSON.stringify(resUpdateUser.message)
                });
            }

        } else {
            notification.error({
                message: "Error Upload Avatar",
                description: JSON.stringify(resUpload.message)
            });
            return
        }
    }
    return (
        <>
            <Drawer
                width={"50vw"}
                title="Basic Drawer"
                onClose={() => {
                    setdataDetail(null)
                    setIsDetailOpen(false);
                }}
                open={detailOpen}
            >
                {dataDetail && (
                    <>
                        <p>Id: {dataDetail._id}</p>
                        <br />
                        <p>FullName: {dataDetail.fullName}</p>
                        <br />
                        <p>Phone: {dataDetail.phone}</p>
                        <br />
                        <p>Avatar:</p>
                        <div style={{
                            marginTop: "10px",
                            height: "100px", width: "150px",
                            border: "1px solid #ccc",
                        }}>
                            <img style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
                        </div>
                        <div>
                            <label htmlFor="btnUpload" style={
                                {
                                    display: "inline",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "orange",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }
                            }>Upload Avatar</label>
                            <input
                                type="file" hidden id='btnUpload'
                                onChange={handelOnChangeFile}
                            />
                        </div>
                        {selectedFile &&
                            <>
                                <div style={{
                                    marginTop: "10px",
                                    height: "100px", width: "150px",
                                    marginBottom: "15px",
                                }}>
                                    <img style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                        src={preview} alt="" />
                                </div>
                                <Button
                                    onClick={() => handelUpdateUserAvatar()}
                                    type='primary'>Save</Button>
                            </>

                        }
                    </>
                )}
            </Drawer>
        </>
    );
}

export default ViewUserDetail;