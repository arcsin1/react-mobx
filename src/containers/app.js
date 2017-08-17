import React from "react"
import { hashHistory,browserHistory,Link} from 'react-router';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount(){
    browserHistory.push('/home')
  }
  render() {
    return (
      <div>
        <div>
          <Link to='home' style={{'marginRight':'20px'}}>HOME</Link>
          <Link to='data' style={{'marginRight':'20px'}}>DATA</Link>
          <Link to='log' style={{'marginRight':'20px'}}>LOG</Link>
        </div>

          {this.props.children}
      </div>
    );
  }
}
