'use strict'
import Loading from './loading';

import './dialog.less';

const Dialog = () => (
	<div className='app-lialog'>
		<div className="msg-in-left">
			<div className = "item" >hi ~ 很高兴认识你，我是 elevenbeans ~</div>
		</div>
		<div className="msg-in-right">
			<div className = "item" >hi ~ 很高兴认识你，我是李福菊</div>
		</div>
		<div className="msg-in-left">
			<div className = "item" >好名字 =,=</div>
		</div>
		<div className="msg-in-right">
			<div className = "item" >那是那是 !</div>
		</div>
		<div className="msg-in-left">
			<div className = "item" >
				<Loading />
			</div>
		</div>
				<div className="msg-in-right">
			<div className = "item" ><Loading /></div>
		</div>
	</div>
)

export default Dialog;