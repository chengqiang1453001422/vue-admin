import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Account from './pages/Account.vue'
import My from './pages/My.vue'
import Upload from './pages/Upload.vue'
import Main from './pages/Main.vue'
import Button from './pages/Ui/Button'
import Icon from './pages/Ui/Icon'
import Modals from './pages/Ui/Modals'
import Form from './pages/Ui/Form'
import Tabs from './pages/Ui/Tabs'
import Less from './pages/css/Less'
import Sass from './pages/css/Sass'
import Css from './pages/css/Css'
import User from './pages/user/User'


let routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
    },
	{
	    path: '/',
	    name: 'main',
	    redirect: '/main'
	},
    {
        path: '/main',
        component: Main,
        // 需要登录才能进入的页面可以增加一个meta属性
        meta: { 
            requireAuth: true
        },
        children: [
            { path: 'home', component: Home, name: '主页' },
            { path: 'account', component: Account, name: '账户管理' },
			{ path: 'my', component: My, name: '我的' },
            { path: 'upload', component: Upload, name: '上传' },
            { path: 'button', component: Button, name: '按钮' },
            { path: 'icon', component: Icon, name: '图标' },
            { path: 'modals', component: Modals, name: '对话框' },
            { path: 'form', component: Form, name :'表单'},
            { path: 'tabs', component: Tabs, name :'标签页'},
            { path: 'less', component: Less, name :'less'},
            { path: 'sass', component: Sass, name :'sass'},
            { path: 'css', component: Css, name :'css'},
            { path: 'user', component: User, name :'user'}
        ]
    },
	{
	    path: '*',
	    redirect: { path: '/main' }
	}
];

export default routes;