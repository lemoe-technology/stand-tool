import { defineStore } from 'pinia';

export const useMenuStore = defineStore({
  id: 'menu',
  state: () => ({
    visible: false,
    selectedKeys: ['directory'],
  }),
});
