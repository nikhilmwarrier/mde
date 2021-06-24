<svelte:options tag="md-editor" />

<script>
	import escapeHTML from 'escape-html'
	export let value = ""
	export let placeholder = ""

	$: textareaVal = value
	$: finalText = processMarkdown(textareaVal)

	const processMarkdown = text => { 
		let _text = escapeHTML(text);
		const htmlText = _text
			.replace(/^### (.*$)/gim, '<b><span class="md-token">###</span> $1</b>')
			.replace(/^## (.*$)/gim, '<b><span class="md-token">##</span> $1</b>')
			.replace(/^# (.*$)/gim, '<b><span class="md-token">#</span> $1</b>')
// 		    .replace(/^\&gt; (.*$)/gim, '<blockquote>> $1</blockquote>')
			.replace(/\*(.*?)\*/gim, '<b><span class="md-token">*</span>$1<span class="md-token">*</span></b>')
			.replace(/_(.*?)__*/gim, '<i><span class="md-token">_</span>$1<span class="md-token">_</span></i>')
//			.replace(/```\n((.|\n)*)\n```/gim, '<pre><span class="md-token">```\n</span><code>$1</code>\n<span 				class="md-token">```</span></pre>')
			.replace(/`(.+?)`/gim, '<code><span class="md-token">`</span>$1<span class="md-token">`</span></code>')
			.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
			.replace(/\[(.*?)\]\((.*?)\)/gim, "[$1](<a href='$2'>$2</a>)")
			.replace(/\n/gim, '<br />')

		return htmlText.trim()
	}


	function handleChange(){
		const event = new CustomEvent("value-change", {
			detail: textareaVal,
			bubbles: true,
			cancelable: true,
			composed: true // makes the event jump shadow DOM boundary
		});	
		this.dispatchEvent(event)
	}	

</script>

<div class="wrapper" >

	<textarea bind:value={textareaVal} spellcheck="false" placeholder={placeholder} on:keydown={handleChange}></textarea>
	<div class="actual-text">
		<style>.md-token{color:var(--mde-col);opacity:.5}.md-string{color: #ff9a3b}code{font-family:var(--mde-font,monospace);background:var(--mde-code-bg,#1e1e1e);color:var(--mde-col,#eee);}blockquote{background:var(--mde-blockquote-bg,#555);box-shadow:0.5rem 0 #666 inset}pre{background:#1e1e1e}</style>
		{@html finalText}
	</div>

</div>
<style>
	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
	:root{
		--mde-bg: ;
		--mde-col: ;
		--mde-border-radius: ;
		--mde-border: ;
		--mde-focus-shadow: ;
		--mde-font-size: ;
		--mde-font: ;
		--mde-line-height: ;
	}
	.wrapper{
		position: relative;
		display: block;
		height: 100%;
		width: 100%;
		border-radius: var(--mde-border-radius, 5px);
	}
	textarea, .actual-text{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		font-size: var(--mde-font-size, 1rem);
		line-height: var(--mde-line-height, 2rem);
		font-family: var(--mde-font, monospace);
		padding: 0.5rem;
		margin: 0;
		border: var(--mde-border, 3px solid transparent);
		border-radius: var(--mde-border-radius, 5px);
	}
	textarea{
		z-index: 1;
		background: transparent;
		color: transparent;
		caret-color: var(--mde-col, #eee);
		resize: none;
		border-radius: var(--mde-border-radius, 5px);
		border: var(--mde-border, 3px solid transparent);
	}
	textarea::placeholder{
		color: var(--mde-col, #eee);
		opacity: 0.4;
	}
	textarea:focus{
		outline: none;
		box-shadow: var(--mde-focus-shadow, 0 0 0 2px rgba(0, 153, 255, 0.75));
	}
	textarea::selection {
		background: rgba(122, 122, 122, 0.2);
		color: transparent;
	}
	.actual-text{
		z-index: 0;
		background: var(--mde-bg, #333);
		color: var(--mde-col, #eee);
	}
</style>