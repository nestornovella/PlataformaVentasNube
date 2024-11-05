import {Model} from "sequelize"


export interface paramsInterface {
  params: {
    id: string;
    name:string;
  };
}

export interface CategoryInstance extends Model {
  id: string;
  name: string;
  addSubCategory?: (subcategory: CategoryInstance) => Promise<void>;
  getSubCategories?: () => Promise<CategoryInstance[]>;
}