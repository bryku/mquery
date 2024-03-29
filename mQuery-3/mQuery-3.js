// micro framework (mico jquery alternative 4% of size) - drburnett 2024-01-04 (yymmdd)
var $version = 3;
function $(q){
	let l = document.querySelectorAll(q);
	
	if(q === 'window'){l[0] = window}
	else if(q === 'document'){l[0] = document}
	else if(q === 'body'){l[0] = document.body}
	
	return {$nodelist: l, $query: q, $loop: $loop,...$proto}
}
function $loop(f,a){
	var r;
	this.$nodelist.forEach((e,i,l)=>{
		r = f(e, a, i, l);
	});

	if(r !== 'undefined' && r !== undefined){return r}
	else{return this}
}
var $proto = {
	size: function(){
		return this.$loop((e,a)=>{
			return {width: e.width || e.clientWidth, height: e.height || e.clientHeight}
		},arguments)
	},
	click: function(){
		return this.$loop((e,a)=>{
			e.click()
		},arguments)
	},
	classAdd: function(){
		return this.$loop((e,a)=>{
			e.classList.add(a[0])
		},arguments)
	},
	classRemove: function(){
		return this.$loop((e,a)=>{
			e.classList.remove(a[0])
		},arguments)
	},
	classToggle: function(){
		return this.$loop((e,a)=>{
			e.classList.toggle(a[0])
		},arguments)
	},
	classContains: function(){
		return this.$loop((e,a)=>{
			return e.classList.contains(a[0])
		},arguments)
	},
	style: function(){
		return this.$loop((e,a)=>{
			if(!a[1]){
				return e.style[a[0]] || false
			}else{
				e.style[a[0]] = a[1]
			}
		},arguments)
	},
	html: function(){
		return this.$loop((e,a)=>{
			if(a[0] === ''){e.innerHTML = ''}
			else if(a[0]){e.innerHTML = a[0]}
			return e.innerHTML
		},arguments)
	},
	htmlAppend: function(){
		return this.$loop((e,a)=>{
			e.innerHTML += a[0]
		},arguments)
	},
	htmlPrepend: function(){
		return this.$loop((e,a)=>{
			e.innerHTML = a[0] + e.innerHTML
		},arguments)
	},
	htmlReplace: function(){
		return this.$loop((e, a)=>{
			var m = a[0].match(/\/(.*?)\/(.*?)$/);
			if(m){
				e.innerHTML = e.innerHTML.replace(new RegExp(m[1], m[2]), a[1])
			}else{
				e.innerHTML = e.innerHTML.replace(a[0], a[1])
			}
		},arguments)
	},
	htmlFetch: function(u, options){
		fetch(u, options)
			.then((res)=>{return res.text()})
			.then((text)=>{
				$(this.$query).html(text);
			})
	},
	remove: function(){
		return this.$loop((e,a)=>{
			e.remove()
		},arguments)
	},
	forEach: function(){
		return this.$loop((e,a,i,l)=>{
			a[0](e,i,l)
		},arguments)
	},
	attr: function(){
		return this.$loop((e, a)=>{
			if(!a[1] && a[1] != '' && a[0] == 'value'){return e.value}
			else if(!a[1] && a[1] != '' && a[0] == 'style'){return e.style.cssText}
			else if(!a[1] && a[1] != ''){return e.getAttribute(a[0])}
			else if(a[0] == 'value'){e.value = a[1]}
			else if(a[0] == 'style'){e.style.cssText = a[1]}
			else{e.setAttribute(a[0],a[1])}
		},arguments)
	},
	attrRemove: function(){
		return this.$loop((e, a)=>{
			if(a[0]){e.removeAttribute(a[0])}
		},arguments)
	},
	attrToggle: function(){
		return this.$loop((e, a)=>{
			if(typeof e.getAttribute(a[0]) != 'undefined'){e.removeAttribute(a[0])}
			else{e.setAttribute(a[0],'')}
		},arguments)
	},
	event: function(){
		return this.$loop((e, a)=>{
			e.addEventListener(a[0], a[1])
		},arguments)
	},
	parseForm: function(u){
		event.preventDefault();
		return this.$loop((e,a)=>{
			var o = {};
			$(this.$query+' [name]').$nodelist.forEach((v)=>{
				o[v.name] = v.value;
			});
			return o
		},arguments)
	},
};
