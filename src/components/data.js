'use strict'
import React from 'react'

import { observer,inject } from 'mobx-react'

@inject('fetchData') @observer class Component extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		let {fetchOperate} = this.props.fetchData
		fetchOperate()
	}
	render(){
		let {data,state} = this.props.fetchData
    return(
			<div className='wrap'>

				{
					data && data.map((item)=>{
						return <div key={item.id}>{item.title}</div>
					})
				}
			</div>
		)
	}
}


export default Component
