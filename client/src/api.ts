export interface User {
  id: number;
  name: string;
  tags: Tag[];
}

export interface UserWithRecipes extends User {
  recipes: Recipe[];
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  user: User;
  image_id: number | null;
}

export interface Tag {
  id: number;
  name: string;
}

export interface TagWithUsersAndRecipes extends Tag {
  users: User[];
  recipes: Recipe[];
}

async function get<T>(endpoint: string): Promise<T> {
  console.log(`Fetching ${endpoint}`);
  const response = await fetch(`//localhost:3001${endpoint}`);
  const data = await response.json();
  console.log(data);
  return data as T;
}

export const getHello = () => get<any>(`/api/hello`);

export const getUsers = () => get<User[]>(`/api/users`);

export const getUser = (id: string) => get<UserWithRecipes>(`/api/users/${id}`);

export const getRecipes = () => get<Recipe[]>(`/api/recipes`);

export const getRecipe = (id: string) => get<Recipe>(`/api/recipes/${id}`);

export const getTag = (id: string) => get<TagWithUsersAndRecipes>(`/api/tags/${id}`);
