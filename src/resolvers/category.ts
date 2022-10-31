import { totalmem } from "os";

export const Category = {
    products: (parent: { id: any; }, { input }: { input: { productOnSale: Boolean, averageProductRating: number } }, context: any) => {
        const products = context.products;
        const categoryId = parent.id;
        let filteredProducts = products.filter((product: { categoryId: String }) => product.categoryId === categoryId);

        if (input) {
            if (input.productOnSale === true) {
                filteredProducts = filteredProducts.filter((product: { onSale: boolean }) => product.onSale);
            }

            if ([1, 2, 3, 4, 5].includes(input.averageProductRating)) {
                filteredProducts=filteredProducts.filter(({ id }: { id: string }) => {
                    let totalRating = 0;
                    let numberOfReviews = 0;

                    context.reviews.filter((reviews: { productId: string, rating: number }) => {
                        return reviews.productId === id
                    }).forEach((reviews: { productId: string, rating: number }) => {
                        totalRating = totalRating + reviews.rating;
                        numberOfReviews++;
                    });
                    const avrg = totalRating / numberOfReviews;

                    return avrg >= input.averageProductRating
                })
            }

        }

        return filteredProducts;
    }
}