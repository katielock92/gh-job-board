import { useState } from "react";
import { FaSearch } from "react-icons/fa"



export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://boards-api.greenhouse.io/v1/boards/mx51dev/offices")
        .then( (response) => response.json())
        .then((json) => {
            const results = json.offices.filter( (dept) => {
                return value && dept && dept.name && dept.name.toLowerCase().includes(value);
            });
            console.log(results)
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}


