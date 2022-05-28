import Vue from 'vue'

import {
  Button,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Tabs,
  TabPane,
  Avatar,
  Upload,
  Tooltip,
  Popover,
  Dialog,
  Tag,
  Menu,
  Submenu,
  MenuItem,
  Select,
  Option,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Carousel,
  CarouselItem,
  DatePicker,
  Footer,
  Container,
  Header,
  Main,
  Loading,
  Notification
} from 'element-ui'

(Tag).props.effect.default = 'dark'

Vue.component(Button.name, Button)
Vue.component(Main.name, Main)
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Avatar.name, Avatar)
Vue.component(Upload.name, Upload)
Vue.component(Input.name, Input)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Switch.name, Switch)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Popover.name, Popover)
Vue.component(Dialog.name, Dialog)
Vue.component(Tag.name, Tag)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.prototype.$notify = Notification;

Vue.use(Loading)

export const plugin = () => {}

export default plugin
