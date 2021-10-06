import { Category } from "../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoryRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log("create");
  }
  findByName(name: string): Category {
    return undefined;
  }

  list(): Category[] {
    return [];
  }
}

export { PostgresCategoryRepository };
