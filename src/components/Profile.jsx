import './ChatHome.css'
import './Profile.css'
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
    key: '1',
    icon: <MailOutlined />,
    label: 'Messages',
  },
  {
    key: '2',
    icon: <ProfileOutlined />,
    label: 'Profile & Privacy',
  },
  {
    key: '3',
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
function Profile()
{




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

            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}

            items={items}
          />
          {/* </Badge> */}
        </div>
        <div className='logout'>
          <Menu

            defaultSelectedKeys={['1']}

            items={items2}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
