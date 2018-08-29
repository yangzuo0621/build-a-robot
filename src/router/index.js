import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../builder/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        { path: 'heads', name: 'RobotHeads', component: RobotHeads },
        { path: 'arms', name: 'RobotArms', component: RobotArms },
        { path: 'toros', name: 'RobotTorsos', component: RobotTorsos },
        { path: 'bases', name: 'RobotBases', component: RobotBases },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
    },
  ],
});
