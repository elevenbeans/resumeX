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
		<div className="msg-in-left">
			<div className = "item" >
				于是史上最贵iPhone X一出，常年吐槽iPhone的各位就突然嘴软了。
				今天，我在美国硅谷的一家百思买去提取新手机时，就收获了一大筐iPhone X新用户对自己的吐槽：不是它难用，肯定是我笨！
				这个系列就这样轰轰烈烈地在人群中传唤开来。
			</div>
		</div>
		<div className="msg-in-right">
			<div className = "item" >
				使用iPhone X是需要智商的。像我这种时不时智商欠费的果粉可能并没有什么资格使用新款iPhone X手机。
			</div>
		</div>
		<div className="msg-in-right">
			<div className = "item" >
				总之，这一天，我对自己的智商有了重新的认识——欠费！
			</div>
		</div>
	</div>
)

export default Dialog;