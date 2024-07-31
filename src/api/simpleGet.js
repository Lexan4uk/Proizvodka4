import { api } from "@api/api";

export const apiTags = {
    menu_categories: "menu_categories",
    menu: "products/menu",
    promotions: "promotion",
    promotionById: (id) => `promotion/${id}`,
};

export async function simpleGet(params) {
    if (params) {
        const response = await api.get(params);
        return response.data;
    }
    else
        return null

}
export default simpleGet