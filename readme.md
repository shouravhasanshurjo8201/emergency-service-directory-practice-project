
### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById() finds an element by id.
getElementsByClassName() finds all matching elements by class .
querySelector() CSS selector first matching  element .
querySelectorAll() finds all matching elements by CSS selector .

### How do you create and insert a new element into the DOM?
document.createElement() creates a new element .
adds content or attributes with innerText, id, className .
inserts into the DOM with appendChild() .

### What is Event Bubbling and how does it work?
Event Bubbling means that when an event occurs in a child element, it spreads step by step to the parent elements above.


## What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is the process of placing an event listener on a parent element and using that listener to handle events of all child elements of the parent.
1 If I assign a separate listener to all child elements, the listener will sit on many DOM elements, which will result in performance degradation.

2 if I add a new child element, I need to set a separate listener.

3 In the case of event delegation, the parent listener handles all children, so the code is clean and efficient.

### What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the default behavior of an event.
stopPropagation() stops bubbling or capturing events.
