import LoginFormLayout from "./components/layout/LoginFormLayout";
import UserDetailLayout from "./components/layout/UserDetailLayout";
import RegisterFormLayout from "./components/layout/RegisterFormLayout";
import MainListLayout from "./components/layout/MainListLayout"; // community_detail
import CommunityDetailLauout from "./components/layout/community_detailLayout";
import NewCommunityLayout from "./components/layout/NewCommunityLayout";
import CommunityViewLayout from "./components/layout/CommunityViewLayout";
const routes = [
    {
        name:"UserDetail",
        key:"userDetail",
        route:"/user-detail/:userId",
        component:<UserDetailLayout></UserDetailLayout>
    },
    {
        name:"LoginForm",
        key:"loginForm",
        route:"/login",
        component:<LoginFormLayout></LoginFormLayout>
    },
    {
        name:"RegisterForm",
        key:"RegisterForm",
        route:"/register",
        component:<RegisterFormLayout></RegisterFormLayout>
    },
    {
        name:"MainList",
        key:"MainList",
        route:"/mainlist",
        component:<MainListLayout></MainListLayout>
    },
    {
        name:"community_detail",
        key:"community_detail",
        route:"/community_detail",
        component:<CommunityDetailLauout></CommunityDetailLauout>
    },
    {
        name:"new_community",
        key:"new_community",
        route:"/new_community",
        component:<NewCommunityLayout></NewCommunityLayout>
    },
    {
        name:"CommunityView",
        key:"CommunityView",
        route:"/CommunityView",
        component:<CommunityViewLayout></CommunityViewLayout>
    },
    {
        name: "CommunityView",
        key: "communityView",
        route: "/CommunityView/:id", // ID를 URL 매개변수로 받도록 수정
        component: <CommunityViewLayout></CommunityViewLayout>
    }
]
export default routes;