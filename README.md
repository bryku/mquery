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
    * Vanilla Js: document.querySelector().value
    * jQuery: $().val()
    * mQuery _('input').attr('value');
    * It was incorporated in attr to save file size.
**Note:** _().attr('style') can get and set styles.
    * Html: style=""
    * Vanilla Js: document.querySelector().cssText
							
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
```
<div id="msg">Hello World</div>

_('#msg').style('color','red');
<div id="msg" style="color:red">Hello World</div>

_('#msg').style('color');
// red
```
### Size (width & height)

```
<div id="msg" style="width: 200px;">Hello World</div>
_('#msg').size().width;
// 200

<div id="msg" style="width: 200px; padding-left: 10px">Hello World</div>
_('#msg').size().width;
// 210

<div id="msg" style="width: 200px; height: 18px; padding-left: 10px">Hello World</div>
_('#msg').size()
// {width: 210, height: 18}
```

**Note:** width() and height() return the physical size of the element and not the style. This is useful when needing the size of auto sizing elements like grid, img, and other inline-block elements;
    * Vanilla Js: document.querySelector().offsetHeight;
    * jQuery: $().height;
    * mQuery: _().height;

### Event

<button id="btn">Click Me</button>
_('#btn').event('click', function(){
    console.log('You clicked me');
});

**Note:** This is shorthand for Vanilla Js's addEventListener.

### Update

msg.html: 'Hello World'
index.html: '<div id="msg">Loading...</div>'
_('msg').update('msg.html');
<div id="msg">Hello World</div>

### Ajax

_ajax(URL, CALLBACK, ERROR, START, DONE);
_ajax('msg', 
function(text){console.log(text)},
function(err){console.log('there was an error')},
function(){console.log('ajax has started')},
function(){console.log('ajax has ended')});

### Form Parse

<form id="form">
	<input name="firstName" value="John">
	<input name="lastName" value="Doe">
	<input name="email" value="johndoe@email.com">
	<div>
		<input name="password" value="orangeCookies">
	</div>
</form>
_('#form').formParse();
/*
{
	'firstName': 'John',
	'lastName': 'Doe',
	'email': 'johndoe@email.com',
	'password': 'orangeCookies',
}
*/
