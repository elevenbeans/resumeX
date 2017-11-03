'use strict'

import './loading.css';

const Loading = () => (
	<div className='uil-ellipsis-css' style={{"transform":"scale(0.1)", "margin":"0 auto"}}>
	 	<div className="ib">
	 		<div className="circle">
	 			<div></div>
	 		</div>
	 		<div className="circle">
	 			<div>
	 			</div>
	 		</div>
	 		<div className="circle">
	 			<div></div>
	 		</div>
	 		<div className="circle">
	 			<div></div>
	 		</div>
	 	</div>
	</div>
)

export default Loading;