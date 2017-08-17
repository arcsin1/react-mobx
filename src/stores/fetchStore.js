'use strict'
import {
  observable,
  action
} from 'mobx'

// 请求
class fetchDataStore {
  @observable data;
  @action fetchOperate = () => {
    let fetchURL = 'https://api.github.com/repos/arcsin1/arcsin1.github.io/issues';
    fetch(fetchURL, {method: 'get'})
      .then(res => res.json())
      .then(
        action("fetchOperate_success",(res) => {

          this.data = res
        })
      )
      .catch(
        action("fetchOperate_error",(err) => {
        console.error('出错啦');
        })
      )
  }
  constructor() {
    this.data = []
  }
}
const fetchData = new fetchDataStore()

export default fetchData
