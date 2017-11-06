'use strict'

const AppHeader = () => (
	<header>
  	<div className = "app-link">
    	<ul>
    		<li>
    			<a
    				target = "_blank"
    				href = "http://elevenbeans.github.io/"
    			>
    				博客
    			</a>
    		</li>
    		<li>
    			<a
    				target = "_blank"
    				href = "https://github.com/elevenBeans/Grocery/raw/master/李斌简历_update.pdf"
    			>
    				简历
    			</a>
    		</li>
    	</ul>
  	</div>
  	<div className = "app-social">
    	<ul>
    		<li className = "gmail">
    			<a
    				target = "_blank"
    				href = "mailto:elevenbeansf2e@gmail.com"
    			>
    			</a>
    		</li>
    		<li className = "github">
    			<a
    				target = "_blank"
    				href = "https://github.com/elevenbeans"
    			>
    			</a>
    		</li>
    		<li className = "juejin">
    			<a
    				target = "_blank"
    				href = "https://juejin.im/user/587fce9361ff4b006522519e">
    			</a>
    		</li>
    		<li className = "zhihu">
    			<a
    				target = "_blank"
    				href = "https://www.zhihu.com/people/shi-yike-dou-zi/activities">
    			</a>
    		</li>
    	</ul>
  	</div>
	</header>
)

export default AppHeader;