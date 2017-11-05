'use strict'
import Loading from './loading';

import './dialog.less';

console.log(Loading);

const Dialog = (props) => (
	<div className='app-lialog'>
		{
			props.messageArr.map((item)=>(
				<div>
					<div
						className = {
							item.isUser ? "msg-in-right" : "msg-in-left"
						}
					>
						<div
							className = "item"
							dangerouslySetInnerHTML = {{
								__html: item.text ? item.text : Loading
							}}>
						</div>
					</div>
				</div>
			))
		}
	</div>
)

export default Dialog;