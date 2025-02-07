import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useSelector } from "react-redux";


const Filter = ({ filter }) => {
    const [openFilters, setOpenFilters] = useState({
        category: true,
        writer: true
    });

    const [selectedCategories, setSelectedCategories] = useState([]);


    const toggleFilter = (filter) => {
        setOpenFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
    };

    // const categories = [
    //     "Apple askdso vjoiedvf (56)", "Microsoft (45)", "Logitech (97)", "Sony (234)", "Asus (97)",
    //     "Dell (56)", "MSI (97)", "Canon (49)", "BenQ (23)", "Razor (49)"
    // ];

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const book = useSelector(state => state.book?.book?.data);
    const author = [];
    book?.forEach((data) => {
        if (!author.includes(data.author)) {
            author.push(data.author);
        }
    })

    const categories = [];
    book?.forEach((data) => {
        if (data.category && !categories.includes(data.category)) {
            categories.push(data.category);
        }
    })
    console.log(categories);

    const handleFilter = () => {
        filter(selectedCategories);
    }

    return (
        <div className="w-[100%] lg2:flex lg2:flex-col lg2:flex-shrink-0 lg2:w-[fit-content] bg-white p-4 rounded-lg shadow-md mt-2 lg2:mt-7 h-[fit-content]">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold hidden lg2:block">Filters</h3>
            </div>
            <div className="relative mb-3">
                <Search className="absolute left-2 top-2 text-gray-400" size={16} />
                <input
                    type="text"
                    placeholder="Search keywords..."
                    className="pl-8 pr-2 py-1 w-full border rounded-md focus:outline-none text-sm"
                />
            </div>


            <div className="border-b py-2">
                <button
                    className="flex justify-between w-full text-left text-sm"
                    onClick={() => toggleFilter("category")}
                >
                    Author
                    {openFilters.writer ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openFilters.writer && (
                    <div className="p-2 text-gray-700 text-sm">
                        {author?.map((writer) => (
                            <div key={writer} className="flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(writer)}
                                    onChange={() => toggleCategory(writer)}
                                />
                                <label>{writer}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>


            <div className="border-b py-2">
                <button
                    className="flex justify-between w-full text-left text-sm"
                    onClick={() => toggleFilter("writer")}
                >
                    Category
                    {openFilters.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openFilters.category && (
                    <div className="p-2 text-gray-700 text-sm">
                        {categories.map((category) => (
                            <div key={category} className="flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => toggleCategory(category)}
                                />
                                <label>{category}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-end mt-4">
                <button
                    className="bg-green-600 text-white px-2 py-1 font-medium rounded-md hover:bg-green-700"
                    onClick={handleFilter}
                >
                    Apply Filters
                </button>
            </div>

        </div>
    );
};

export default Filter;
