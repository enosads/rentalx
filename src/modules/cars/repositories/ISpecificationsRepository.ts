import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsReposiory {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
  list: () => Specification[];
}

export { ISpecificationsReposiory, ICreateSpecificationDTO };
