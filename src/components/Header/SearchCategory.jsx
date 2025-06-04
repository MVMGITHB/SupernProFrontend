"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { base_url } from "../Helper/helper";

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

export default function SerachCategory() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  const fetchResults = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setError(null);
      setResults(null);
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch(
        `${base_url}/api/blog/search?query=${encodeURIComponent(searchTerm)}`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch results");
      }

      setResults(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(debounce(fetchResults, 500), []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <>
      <div className=" relative md:flex items-center bg-white text-gray-900 rounded-full px-2 py-2 outline mr-8">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-40"
          value={query}
          onChange={handleInputChange}
        />
        {loading && (
          <span className="ml-2 text-sm text-gray-500">Loading...</span>
        )}
        <button className="text-purple-600 font-bold">🔍</button>
      </div>

      {results && (
        <div className="absolute z-50 top-18 right-45 w-full md:w-[220px] max-h-[400px] overflow-y-auto bg-violet-200 border border-gray-300 shadow-xl rounded-xl mt-2 p-4 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Search Results:
          </h3>

          {results?.length > 0 && (
            <div>
              <h4 className="text-md font-semibold mb-2 text-purple-700">
                Blogs
              </h4>
              {results.map((item, index) => (
                <div
                  key={item.id || index}
                  className="p-3 rounded-lg hover:bg-gray-100 transition text-black"
                >
                  <Link
                    href={`/${item?.category?.slug}/${item?.slug}`}
                    onClick={() => {
                      setQuery("");
                      setResults(null);
                    }}
                  >
                    <h5 className="font-medium">{item.title}</h5>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {results && !results?.length && !loading && (
        <p className="mt-4 text-gray-900">No results found.</p>
      )}
    </>
  );
}
