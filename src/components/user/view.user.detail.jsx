import { Button, Drawer } from 'antd';
const ViewUserDetail = (props) => {
    const { dataDetail, setdataDetail, detailOpen, setIsDetailOpen } = props;
    console.log("Check dataDetail: ", dataDetail);
    
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
                        <div>
                        <img width={150} height={100} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
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
                        <input type="file" hidden id='btnUpload'/>
                        </div>
                        {/* <Button type='primary'>Upload Avatar</Button> */}
                    </>
                )}
            </Drawer>
        </>
    );
}

export default ViewUserDetail;