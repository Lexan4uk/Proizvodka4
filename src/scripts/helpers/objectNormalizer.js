const objectNormalizer = (item, path = "") => {
    if (path === "product" && item.image_links && item.image_links.length === 0)
        item.image_links.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s'); 
    if (path === "action" && item.cover && item.cover === ""){
        item.cover = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s'; 
    }












    if (path === "action")
        return item //можно убрать. Убирает хреф у акции
    item.href = `${path}/${item.id}`
    
    return item;
}
export default objectNormalizer