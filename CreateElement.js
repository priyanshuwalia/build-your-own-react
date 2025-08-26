function createElement (type, config, children){
    let props = Object.assign({}, config);

    let childCount = arguments.length-2;
    if(childCount===1){
        props.children=children;
    } else if (childCount>2){
        props.children=[].slice.call(arguments, 2)
    }
    return {
        type, props,
    }
}