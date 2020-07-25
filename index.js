import { createIcon } from './core';
import map from './AntDesign/map';
import '../css/AntDesign.css';

const icon = createIcon(map, 'AntDesign');
icon.install = function (Vue, options = {}) {
  Vue.component(options.name || icon.name, icon);
};
export default icon;
