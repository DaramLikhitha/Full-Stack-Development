/* DOM(Document object model) methods
getElementById
getElementByClassName
getElementByTagName
*/

var headingElement=document.getElementById('heading');
headingElement.innerHTML='Hello Everyone !!';

/* Events
onclick
on sumbit
on mouseover and on mouseout
 */

var button=document.getElementById('btn');

button.addEventListener('click', showAlert);

/* addEventListener(event,function) */

function showAlert(){
    alert('Button 3 clicked !');
}
