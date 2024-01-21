import { CategoryListType } from 'types/model';

const Category = ({
    categoryList,
    handleCategory,
}: {
    categoryList: CategoryListType;
    handleCategory: (category: string) => void;
}) => {
    return (
        <div className="w-full h-auto">
            <div className="text-lg font-bold">Category</div>
            <div className="flex flex-col p-2 w-full">
                {categoryList.map((category) => (
                    <button
                        type="button"
                        className="p-2 text-start rounded-md hover:bg-gray-100"
                        key={category.categoryName}
                        onClick={() => handleCategory(category.categoryName)}
                    >
                        {category.categoryName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Category;
