import { injectGlobal } from 'vue-styled-components'

injectGlobal`
	body {
		font-family: 'Space Mono', monospace;
		margin: 0;
    background-color: #f4f4f4;

		--bg-snake-cell: #8ac858;
		--bg-food-cell: #fd5d47;
		--border-color: #e9e9e9;
		--bg-additional-block: #f9f9fb;

		--border-radius: 5px;
	}
`
