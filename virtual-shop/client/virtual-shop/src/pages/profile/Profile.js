import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space ,Card} from 'antd';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Profile() {
  const { Meta } = Card;
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  console.log(user);
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://t3.ftcdn.net/jpg/04/06/91/62/360_F_406916265_hxmrv7wgw9SZN9871yebxQJAX7HsHdNp.jpg"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar icon={<UserOutlined />} />
            }
            title={user.email}
            description="This is the description"
          />
        </Card>
        <div style={{marginRight:"35px"}}>
        <Button colorScheme="red" variant={"solid"} onClick={handleLogout}>
          Logout
        </Button>
      </div>
      </div>
     
    </Flex>
  );
}

export default Profile;
