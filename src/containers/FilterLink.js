import {connect} from 'react-redux'
import Link from '../components/Link'
import{setVisibility} from '../actions'

const mapStateToProps =(state,ownProps) => {
	console.log(state)
	console.log(ownProps)
	return {
		active:ownProps.filter === state.visibilityFilter
	}
}
const mapDispatchToProps =(dispatch,ownProps) => {
	return {
		onClick: () =>{
			dispatch(setVisibility(ownProps.filter))
		}
	}
}
//mapStateToProps 状态改变的时候 影响组件Link
//mapDispatchToProps 行为被分发的时候 影响组件Link
//逻辑组件传递显示组件Link来实现逻辑
const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink