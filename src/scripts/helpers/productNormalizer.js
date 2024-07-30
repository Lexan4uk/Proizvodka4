const productNormalizer = (item) => {
    if (item.image_links.length === 0)
        item.image_links.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s'); 
    item.href = `product/${item.id}`
}
export default productNormalizer