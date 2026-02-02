//the below type is for typeScript
//async function always returns a promise
export type ObjectToAdd = {
  title: string;
};
//again, defining a type for typeScript
export type AdditionalInformation = {
  displayName?: string;
};

//

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  items: CategoryItem[]; // meaning array of CategoryItem
};

// define a map type in type Script
export type CategoryMap = {
  [key: string]: CategoryItem[];
};

/////////////////////////////////CART ITEMS

export type CartItem = CategoryItem & { quantity: number }; //one implementation of CartItem different from the one below using CategoryItem,  the finest because if caregoryItem Changes, CartItem will change as well
