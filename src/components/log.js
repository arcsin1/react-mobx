'use strict'
import React from 'react'
import { observer,inject } from 'mobx-react'


@inject('groupStore')
@observer class Component extends React.Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){}

	render(){
    // console.log(this.props.groupStore.user)
    	return(
				<div>
            {
              this.props.groupStore.user.map((item)=> {
                  return <div  key={item.id}>{item.name}--{item.email}</div>
              })
            }
				</div>
		)
	}
}
export default Component
