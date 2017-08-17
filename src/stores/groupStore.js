import { observable,computed} from 'mobx';

class User {
  @observable user = [
    {id:1,name:'zy',email:'23225@qq.com'},
    {id:2,name:'zy1',email:'232253@qq.com'},
    {id:3,name:'zy2',email:'232254@qq.com'},
  ];
}

export default new User();
