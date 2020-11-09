// micro framework (mico jquery alternative 4% of size) - drburnett 2020
var _version = 2.04;
function _(q){
	let l = document.querySelectorAll(q);
	
	if(q === 'window'){l[0] = window}
	else if(q === 'document'){l[0] = document}
	else if(q === 'body'){l[0] = body}
	
	return {_nodelist: l, _query: q, _loop: _loop,..._proto}
}
function _loop(f,a){
	var r;
	this._nodelist.forEach((e,i,l)=>{
		r = f(e, a, i, l);
	});

	if(r !== 'undefined'){return r}
	else{return this}
}
var _proto = {
	size: function(){
		return this._loop((e,a)=>{
			return {width: e.width, height: e.height}
		},arguments)
	},
	click: function(){
		return this._loop((e,a)=>{
			e.click()
		},arguments)
	},
	classAdd: function(){
		return this._loop((e,a)=>{
			e.classList.add(a[0])
		},arguments)
	},
	classRemove: function(){
		return this._loop((e,a)=>{
			e.classList.remove(a[0])
		},arguments)
	},
	classToggle: function(){
		return this._loop((e,a)=>{
			e.classList.toggle(a[0])
		},arguments)
	},
	classContains: function(){
		return this._loop((e,a)=>{
			return e.classList.contains(a[0])
		},arguments)
	},
	classBool: function(){
		return this._loop((e,a)=>{
			if(a[0] === true){e.classList.add(a[1])}
			else{e.classList.add(a[2])}
		},arguments)
	},
	style: function(){
		return this._loop((e,a)=>{
			if(!a[1]){
				return e.style[a[0]] || false
			}else{
				e.style[a[0]] = a[1]
			}
		},arguments)
	},
	html: function(){
		return this._loop((e,a)=>{
			if(!a[0]){return e.innerHTML}
			e.innerHTML = a[0]
		},arguments)
	},
	htmlAppend: function(){
		return this._loop((e,a)=>{
			e.innerHTML += a[0]
		},arguments)
	},
	htmlPrepend: function(){
		return this._loop((e,a)=>{
			e.innerHTML = a[0] + e.innerHTML
		},arguments)
	},
	htmlReplace: function(){
		return this._loop((e, a)=>{
			var m = a[0].match(/\/(.*?)\/(.*?)$/);
			if(m){
				e.innerHTML = e.innerHTML.replace(new RegExp(m[1], m[2]), a[1])
			}else{
				e.innerHTML = e.innerHTML.replace(a[0], a[1])
			}
		},arguments)
	},
	htmlBool: function(){
		return this._loop((e,a)=>{
			if(a[0] === true){e.innerHTML = a[1]}
			else{e.innerHTML = a[2]}
		},arguments)
	},
	remove: function(){
		return this._loop((e,a)=>{
			e.remove()
		},arguments)
	},
	forEach: function(){
		return this._loop((e,a,i,l)=>{
			a[0](e,i,l)
		},arguments)
	},
	attr: function(){
		return this._loop((e, a)=>{
			if(!a[1] && a[0] == 'value'){return e.value}
			else if(!a[1] && a[0] == 'style'){return e.style.cssText}
			else if(!a[1]){return e.getAttribute(a[0])}
			else if(a[0] == 'value'){e.value = a[1]}
			else if(a[0] == 'style'){e.value = a[1]}
			else{e.setAttribute(a[0],a[1])}
		},arguments)
	},
	event: function(){
		return this._loop((e, a)=>{
			e.addEventListener(a[0], a[1])
		},arguments)
	},
	update: function(u){
		_ajax(u, this._query)
	},
	formParse: function(u){
		return this._loop((e,a)=>{
			var o = {};
			_(this._query+' [name]')._nodelist.forEach((v)=>{
				o[v.name] = v.value;
			});
			return o
		},arguments)
	},
};
var _ajax = (u, callback, error, start, done)=>{
	var xhttp = new XMLHttpRequest();

	if(callback){xhttp.callback = callback}
	if(error){
		xhttp.onerror = error;
		xhttp.onabort = error;
		xhttp.ontimeout = error;
	}
	if(start){xhttp.onloadstart = start}
	if(done){xhttp.onloadend = done}
	
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			if(typeof this.callback === 'string'){
				_(this.callback).html(this.responseText)
			}else{
				let data = false;
				try{data = this.responseText}
				catch(e){data = false}
				this.callback(this.responseText, data);
			}
		}else if(this.readyState == 4 && this.status !== 200){
			if(this.onerror){this.onerror(this)}
		}
	};
	xhttp.open("GET", u, true);
	xhttp.send();
};
