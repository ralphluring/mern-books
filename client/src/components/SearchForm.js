import React from "react";

function searchFrom ({q, handleInputChange, handleFormSubmit}){

    return(
        <div className="form-container">
            <form className="form-inline" >
                <div className="form-group">
                    <input
                    className="search-input"
                    id="title"
                    type="text"
                    value={q}
                    placeholder="Search Term..."
                    name="titlesearch"
                    onChange={handleInputChange}
                    />

                    <button
                    onClick={handleFormSubmit}
                    type="submit"
                    >
                    Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default searchFrom;