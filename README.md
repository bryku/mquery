# mquery
Compact jQuery alternative under 3kB.

### Overview: Common Uses

Prototypes apply to all matching queries.

```
<ul id="list">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>

_('#list').classAdd('text-red');

<ul id="list">
  <li class="text-red">a</li>
  <li class="text-red">b</li>
  <li class="text-red">c</li>
</ul>
```


### ForEach
If an mQuery prototype doesn't exist, you can still use traditional JS using forEach.

```
<ul id="list">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>

_('#list > *').forEach(function(e){
  e.classList.add('text-red');
});
		
<ul id="list">
  <li class="text-red">a</li>
  <li class="text-red">b</li>
  <li class="text-red">c</li>
</ul>
```

### Attribute

```
<a id="home" href="home.html">Go Home</a>

_('#home').attr('href');
// home.html

_('#home').attr('href','index.html');
<a id="home" href="index.html">Go Home</a>
```
**Note:** _().attr('value') can get and set form values unlike the traditional **.attributes['value']**.
**Note:** _().attr('style') can get and set styles. It is equal to **.cssText**.
							
### HTML

```
<div id="msg">Hello World</div>
					
_('#msg').html();
// Hello World

_('#msg').html('Hello Dave');
<div id="msg">Hello Dave</div>
```

### HTML Append

```
<ul id="list">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
					
_('#list').htmlAppend('<li>d</li>');
<ul id="list">
  <li>a</li>
  <li>b</li>
  <li>c</li>
  <li>d</li>
</ul>
```

### HTML Prepend

```
<ul id="list">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
					
_('#list').htmlPrepend('<li>d</li>');
<ul id="list">
  <li>d</li>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
```

### Html Bool

```
<div id="msg">Loading...</div>

var isLoggedIn = true;
_('#msg').htmlBool(isLoggedIn, 'Hello Dave!', 'Please Signin.');
<div id="msg">Hello Dave!</div>

var isLoggedIn = false;
_('#msg').htmlBool(isLoggedIn, 'Hello Dave!', 'Please Signin.');
<div id="msg">Please Signin.</div>
```
### HTML Replace

```
<div id="msg">Hello World</div>

_('#msg').htmlReplace('world','Dave');
<div id="msg">Hello Dave</div>

_('#msg').htmlReplace('/l/gmi','L');
<div id="msg">HeLLo Dave</div>
```

### Class Add

```
<div id="msg">Hello World</div>

_('#msg').classAdd('text-red');
<div id="msg" class="text-red">Hello World</div>
```

### Class Remove

```
<div id="msg" class="text-red background-black">Hello World</div>

_('#msg').classRemove('text-red');
<div id="msg" class="background-black">Hello World</div>
```

### Class Toggle

```
<div id="msg" class="text-red background-black">Hello World</div>

_('#msg').classToggle('text-red');
<div id="msg" class="background-black">Hello World</div>

_('#msg').classToggle('text-red');
<div id="msg" class="text-red background-black">Hello World</div>
```

### Class Bool

```
<div id="msg">Loading...</div>

var isLoggedIn = true;
_('#msg').cssBool(isLoggedIn, 'text-green', 'text-red');
<div id="msg" class="text-green">Loading...</div>

var isLoggedIn = false;
_('#msg').cssBool(isLoggedIn, 'text-green', 'text-red');
<div id="msg" class="text-red">Loading...</div>
```

### Class Contains
```
<div id="msg" class="background-black">Hello World</div>

_('#msg').classContains('text-red');
// false

_('#msg').classContains('background-black');
// true
```

### Style


									_('#msg').classContains('txt-green');<br>
									// true<br>
								</p>
							</div>
						</div>
					</div>
					<div class="page">
						<div class="card layout-100-auto" style="overflow: hidden; background:#928fe6;">
							<div class="box">
								<h3>Style</h3>
							</div>
							<div class="box" style="background:#514f80; overflow: auto;">
								<p>_().style(STRING, OPTIONAL_STRING)</p>
								<hr>
								<p>
									&#60;span id="msg" style="color: red"&#62;<br>
									&nbsp; &nbsp;Hello World<br>
									&#60;/span&#62;
								</p>
								<p>
									_('#msg').style('color');<br>
									// red
								</p>
								<p>
									_('#msg').style('color','green');<br>
									&#60;span id="msg" style="color: green"&#62;<br>
									&nbsp; &nbsp;Hello World<br>
									&#60;/span&#62;
								</p>
							</div>
						</div>
					</div>
					<div class="page">
						<div class="card layout-100-auto" style="overflow: hidden; background:#928fe6;">
							<div class="box">
								<h3>Size</h3>
							</div>
							<div class="box" style="background:#514f80; overflow: auto;">
								<p>
									_().width();<br>
									_().height();<br>
								</p>
								<hr>
								<p>
									&#60;div id="msg" style="width: 200px; height: 100px;"&#62;<br>
									&nbsp; &nbsp;Hello World<br>
									&#60;/div&#62;
								</p>
								<p>
									_('#msg').width();<br>
									// 200 
								</p>
								<p>
									_('#msg').height();<br>
									// 100 
								</p>
								<p>
									Note: This returns offsetWidth/offsetHeight, so it works with grid, and other auto sizing styles.
								</p>
							</div>
						</div>
					</div>
					<div class="page">
						<div class="card layout-100-auto" style="overflow: hidden; background:#928fe6;">
							<div class="box">
								<h3>Event</h3>
							</div>
							<div class="box" style="background:#514f80; overflow: auto;">
								<p>
									_().event(STRING, FUNCTION);
								</p>
								<hr>
								<p>
									&#60;button id="btn"&#62;<br>
									&nbsp; &nbsp;Click Me<br>
									&#60;/button&#62;
								</p>
								<p>
									_('#btn').event('click',function(event){
										console.log(event);
									});<br>
								</p>
								<p>
									Note: This is a short hand for "addEventListener()".
								</p>
							</div>
						</div>
					</div>
					<div class="page">
						<div class="card layout-100-auto" style="overflow: hidden; background:#928fe6;">
							<div class="box">
								<h3>Ajax</h3>
							</div>
							<div class="box" style="background:#514f80; overflow: auto;">
								<p>
									_ajax(URL, CALLBACK, ERROR, START, DONE);
								</p>
								<hr>
								<p>
									_ajax('https://www.google.com',<br>
									&nbsp; &nbsp;function(text){console.log(text)},<br>
									&nbsp; &nbsp;function(err){console.log('ajax error')},<br>
									&nbsp; &nbsp;function(){console.log('ajax has started')},<br>
									&nbsp; &nbsp;function(){console.log('ajax has stopped')},<br>
									);
								</p>
							</div>
						</div>
					</div>
					<div class="page">
						<div class="card layout-100-auto" style="overflow: hidden; background:#928fe6;">
							<div class="box">
								<h3>Ajax</h3>
							</div>
							<div class="box" style="background:#514f80; overflow: auto;">
								<p>
									_().ajax(STRING)
								</p>
								<hr>
								<p>
									&#60;div id="msg"&#62;Loading...&#60;/div&#62;
								</p>
								<p>
									_('#msg').ajax('msg.html');<br>
									&#60;div id="msg"&#62;Hello World!&#60;/div&#62;
								</p>
								<p>
									Source: <a href="msg.html">msg.html</a>
								</p>
							</div>
						</div>
					</div>
					<div class="page">
						<div class="card layout-100-auto" style="overflow: hidden; background:#928fe6;">
							<div class="box">
								<h3>Form Parse</h3>
							</div>
							<div class="box" style="background:#514f80; overflow: auto;">
								<p>
									_().formParse()
								</p>
								<hr>
								<p>
								&#60;form id="form"&#62;<br>
								&nbsp; &nbsp;&#60;input name="firstName" value="John"&#62;<br>
								&nbsp; &nbsp;&#60;input name="lastName" value="Doe"&#62;<br>
								&nbsp; &nbsp;&#60;input name="email" value="johndoe@email.com"&#62;<br>
								&nbsp; &nbsp;&#60;div&#62;<br>
								&nbsp; &nbsp;&nbsp; &nbsp;&#60;input name="password" value="orangecookies"&#62;<br>
								&nbsp; &nbsp;&#60;/div&#62;<br>
								&#60;/form&#62;<br>
								</p>
								<p>
									_('#form').formParse();<br>
									/*{<br>
									&nbsp; &nbsp;firstName: "John",<br>
									&nbsp; &nbsp;lastName: "Doe",<br>
									&nbsp; &nbsp;emailName: "johndoe@email.com",<br>
									&nbsp; &nbsp;password: "orangecookies",<br>
									}*/
								</p>
							</div>
						</div>
					</div>
