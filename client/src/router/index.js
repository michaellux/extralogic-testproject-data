import Vue from 'vue';
import Router from 'vue-router';
import FormCreator from '@/components/FormCreator';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormCreator',
      component: FormCreator,
    },
  ],
});
