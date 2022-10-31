import { v4 as uuid } from 'uuid';

export const Mutation = {
  addCategory: (_parent: any, { input }: { input: { name: string } }, context: any) => {
    const name = input.name;
    const newCategory = {
      id: uuid(),
      name: name,
    };

    context.categories.push(newCategory);

    return newCategory;
  },
};
