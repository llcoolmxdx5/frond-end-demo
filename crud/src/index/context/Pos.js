import React, { Component, createContext } from 'react'
import axios from 'axios'
let { Provider, Consumer } = createContext()

export default class PosProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      isShow: false,
      item: {},
      status: ''
    }
  }
  del = (id, e) => {
    e.preventDefault();
    this.setState({
      result: this.state.result.filter(value => value.positionId !== id)
    })
  }
  add = () => {
    this.setState({
      isShow: true,
      item: {},
      status: 'add'
    })
  }
  cancel = () => {
    this.setState({
      isShow: false,
      item: {}
    })
  }
  update = (item) => {
    this.setState({
      isShow: true,
      item: item,
      status: 'update'
    })
  }
  save = (item) => {
    if (this.state.status === 'add') { // 添加
      this.setState({
        isShow: false,
        result: this.state.result.concat([item])
      })
    } else if (this.state.status === 'update') {
      let res = [item]
      for (let i =0; i<this.state.result.length; i++) {
        if (this.state.result[i].positionId === item.id) continue
        res.push(this.state.result[i])
      }
      this.setState({
        isShow: false,
        result: res
      })
    }
  }
  get_page = async (page, e) => {
    e.preventDefault()
    let res = await axios.get(`/list_${page}.json`)
    this.setState({
      result: res.data.content.data.page.result
    })
  }
  render() {
    return (
      <Provider value={{
        result: this.state.result,
        item: this.state.item,
        update: this.update,
        del: this.del,
        add: this.add,
        isShow: this.state.isShow,
        cancel: this.cancel,
        save: this.save,
        get_page: this.get_page
      }}>
        {this.props.children}
      </Provider>
    )
  }
  componentDidMount() {
    axios.get('/list_1.json')
      .then(res => {
        console.log(res.data.content.data.page.result)
        this.setState({
          result: res.data.content.data.page.result
        })
      })
  }
}

export { PosProvider, Consumer }
