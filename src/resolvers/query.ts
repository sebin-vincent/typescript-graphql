

export const Query = {
    categories: (_parent: any,_args: any,context: any) => context.categories,
    category: (_parent: any, args: { id: string; }, context: any) => {
        const categories =context.categories;
        const categoryId = args.id;
        return categories.find((category: { id: any; }) => category.id === categoryId)
    },
    products: (_parent: any,_args: any,context: any) => context.products,
    product: (_parent: any, args: { id: string; }, context: any) => {
        const products =context.categories;
        const productId = args.id;
        return products.find((product: { id: string; }) => product.id === productId);
    }
}