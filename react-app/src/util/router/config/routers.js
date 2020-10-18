
import {ABOUT, HOME, INDEX_PAGE, PASSAGE_DETAIL, PASSAGE_LIST, TEST_ANTD} from "./RouterConst";
import {About, Home, PassgaeDetail, PassgaeList} from "../../../pages/test/TestRouter";
import IndexPage from "../../../pages/index/IndexPage";

let routes = [
  {
    path: INDEX_PAGE,
    component: IndexPage,
    exact: true
  },
  {
    path: HOME,
    component: Home,
    exact: true
  },
  {
    path: ABOUT,
    component: About,
  },
  {
    path: PASSAGE_LIST,
    component: PassgaeList,
    exact: true
  },
  {
    // path: '/passage-list/passage-detail/:id',
    path: PASSAGE_DETAIL + ':id',
    component: PassgaeDetail,
  },
  {
    path: TEST_ANTD,
    component: TEST_ANTD,
  },
];

export default routes;
