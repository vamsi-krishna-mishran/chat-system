import './ChatHome.css'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useEffect } from 'react';

import
{
  SettingOutlined,
  MailOutlined,
  ProfileOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Menu, Badge } from 'antd';

const items = [
  {
    key: 'profile',
    icon: <ProfileOutlined />,
    label: 'Profile & Privacy',
  },
  {
    key: 'messages',
    icon: <MailOutlined />,
    label: 'Messages',
  },

  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  }]
const items2 = [
  {
    key: '1',
    icon: <LogoutOutlined />,
    label: 'Logout',
  },
]
function Profile({ tab, setTab })
{

  const navigate = useNavigate();
  const logout = (e) =>
  {
    console.log(e)
    message.success("logged out successfully")
    navigate('/');
  }
  useEffect(() =>
  {
    //alert("/"+tab)
    // if(!tab=='messages')
    if (tab == 'messages')
    {
      navigate('/chat')
    }
    else
    {
      navigate("/chat/" + tab)
    }
  }, [tab])

  return (
    <div className='profile'>
      <h1>ChatVibe</h1>
      <div className='profile-name'>
        <span>V</span>
        <h3>Vamsi Krishna</h3>
        <b>vamsi@gmail.com</b>
        <hr />
      </div>

      <div className='tabs-wrapper'>
        <div className='tabs'>
          {/* <Badge count={5}> */}
          <Menu

            defaultSelectedKeys={[tab]}
            defaultOpenKeys={[tab]}
            onClick={(e) => setTab(e.key)}
            items={items}
          />
          {/* </Badge> */}
        </div>
        <div className='logout'>
          <Menu
            onClick={logout}
            defaultSelectedKeys={['1']}

            items={items2}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
