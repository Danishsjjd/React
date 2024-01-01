## Virtual DOM:
A virtual DOM is a simple JavaScript object that is the exact
copy of the corresponding real DOM

It can be considered as node tree that consists of elements,
their attributes, and other properties.

Using the render function in React, it creates a node tree and
updates it based on the changes that occur in the data model.

These Changes are usually triggered by users or the actions caused by the system

## Discrete input:
A discrete input is a type of event where the result of one event can affect the behavior of the next, like clicks or presses. Multiple discrete events cannot be batched or throttled without affecting program behavior.