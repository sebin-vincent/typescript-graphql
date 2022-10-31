export const Product = {
    category: (parent: { categoryId: any; }, _args: any, context: any) => {
        const categories =context.categories;
        const categoryId = parent.categoryId;
        return categories.find((category: { id: any; }) => category.id === categoryId);
    },
    reviews :  (parent: { id: string; }, _args: any, context: any) => {
        const reviews =context.reviews;
        const productId = parent.id;
        return reviews.filter((review: { productId: string; }) => review.productId === productId);
    },
}