# props

valid css properties

## Updating

* visit https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
* open web inspector
* paste `copy(JSON.stringify(Array.prototype.slice.call(document.querySelectorAll('.index a > code')).map(function(node){return node.innerText}).filter(function(prop) {return prop.indexOf(':') !== 0 && prop.indexOf('@') !== 0 && prop.indexOf('<') === -1 && prop.indexOf('(') === -1}), null, "  "))`
