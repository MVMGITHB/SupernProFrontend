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

export default function SearchCategory() {
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

  const clearSearch = () => {
    setQuery("");
    setResults(null);
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="md:flex items-center bg-white text-gray-900 rounded-full px-4 py-2 border border-gray-300 w-full md:w-64">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-full text-sm"
          value={query}
          onChange={handleInputChange}
        />
        {loading ? (
          <span className="ml-2 text-xs text-gray-500">Loading...</span>
        ) : (
          <button className="text-purple-600 font-bold text-lg">🔍</button>
        )}
      </div>

      {/* Results Dropdown */}
      {results && (
        <div className="absolute z-50 mt-2 w-full md:w-64 max-h-80 overflow-y-auto bg-white border border-gray-300 shadow-xl rounded-xl p-3">
          {results.length > 0 ? (
            <>
              <h3 className="text-base font-semibold text-gray-700 mb-2">
                Search Results:
              </h3>
              {results.map((item, index) => (
                <Link
                  key={item.id || index}
                  href={`/${item?.category?.slug}/${item?.slug}`}
                  className="block px-2 py-2 text-sm text-gray-800 hover:bg-violet-100 rounded transition"
                  onClick={clearSearch}
                >
                  {item.title}
                </Link>
              ))}
            </>
          ) : (
            <p className="text-sm text-gray-600">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
