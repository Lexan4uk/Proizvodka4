const objectNormalizer = (item, path) => {
    if (item.image_links && path ==="product" && item.image_links.length === 0)
        item.image_links.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s'); 
    
    item.href = `${path}/${item.id}`
    
    return item;
}
export default objectNormalizer