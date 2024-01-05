# mQuery 

mQuery is a library that focuses on *dom* or *document* manipulation.
It is very similar to jQuery and in many respects it is a slimmed down version of it, but at 4% the size. 

* jQuery: 87.6kB
* mQuery: 2.8kB

mQuery can achieve this smaller size, by giving up a lot of the backwards compatibility that is rarely needed anymore.
mQuery also gives up some of the features of jQuery and only focuses on what is commonly used.
However, it does have a few new features that jQuery doesn't. 


# .size()

Size returns and object describing the size of the element.

```
    console.log(
        _('body').size()
    ) 
    // output: {w: 100, h: 100}
```

# .click()

Click triggers and click event listener.

```
    _('button').click()
```

# .classAdd(STRING)

Add a classes to any element.

```
    _('div').classAdd('bg-red', 'txt-black')
```

# .classRemove(STRING)

Remove classes from any element.

```
    _('div').classRemove('bg-red', 'txt-black')
```

# .classToggle(STRING)

Toggles a class on and off.

```
    _('div').classToggle('bg-red');
```

# .classContains(STRING)

Returns true if element contains a class and returns false if it doesn't.

```
    _('div').classAdd('bg-red');
    _('div').classContains('bg-red') // true
    _('div').classContains('bg-blue') // false
```

# .style(STRING, STRING/OPTIONAL)

Add css styles to any element.

```
    _('div').style('background', 'red');
    _('div').style('background'); // 'red'
```

# .html(STRING/OPTIONAL)

Update the HTML of an element.

```
    _('div').html('Hello World');
    _('div').html(); // 'Hello World'
```

# .htmlAppend(STRING)

Add HTML to the end of an HTML element.

```
    _('div').html('Hello World');
    _('div').htmlAppend('Hello Pizza');
    // Hello World Hello Pizza
```

# .htmlPrepend(STRING)

Add HTML to the beginning of an HTML element.

```
    _('div').html('Hello World');
    _('div').htmlPrepend('Hello Pizza');
    // Hello Pizza Hello World
```

# .htmlReplace(STRING, STRING)

Replace text within an Element.

```
    _('div').html('Hello World');
    _('div').htmlReplace('World', 'Pizza');
    // Hello Pizza
```

# .htmlFetch(STRING, OBJECT/OPTIONAL)

Fetches HTML from a url and updates the element.

```
    _('div').htmlFetch('./news');
```

# .remove()

Removes an element from dom.

```
    _('div').remove();
```

# .forEach(CALLBACK)

Loops through query allowing you to access standard attributes. 

```
    _('ul li').forEach((e, i)=>{
        e.innerHTML = i;
    });
```

# .attr(STRING, STRING/OPTIONAL)

Get and Set Attributes.

```
    $(div).attr('data-name', 'john doe');
    $(div).attr('data-name'); // `john doe`
```

# .attrRemove(STRING)

Removes an Attribute.

```
    $(div).attrRemove('data-name');
```

# .attrToggle(STRING)

Toggles and Attribute on and off.

```
    $(div).attrToggle('disabled');
```

# .event(STRING, CALLBACK)

Apply Event Listeners to elements.

```
    $(button).event('click', (event)=>{
        console.log('You clicked me!');
    })
```

# .parseForm()

Parses a form into an object using the Name attributes as keys.

```
    <form>
        <label>Username: </label><input name="username"><br>
        <label>Age: </label><input name="age"><br>
        <button onclick="$(form).parseForm()"></button>
    </form>
    // {username: '', age: '',}
```

