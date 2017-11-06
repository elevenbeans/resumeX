'use strict'
import Loading from './loading';

import './dialog.less';

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
						<div className = "pointer"></div>
					</div>
				</div>
			))
		}
	</div>
)

export default Dialog;