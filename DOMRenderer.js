const ROOT_KEY ='dlthmRootId';
const instancesByRootID ={};
let rootID =1;

function isRoot(node){
    if(node.dataset[ROOT_KEY]){
        return true;
    }
    return false;
}

function renderer(element, node){
    assert(Element.isValidElement(element));

    if(isRoot(node)){
        update(element,node);
    } else {
        mount(element, node);
    }
}
function mount(element,node){
    let component = instantiateComponent(element);

    instancesByRootID[rootID]= component;

    let rendererNode =
    Reconciler.mountComponent(component, node);

    node.dataset[ROOT_KEY]=rootID;
    DOM.empty(node);
    DOM.appendChild(node, rendererNode);
    rootID;
}