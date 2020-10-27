import React, { useState } from "react";
import Sorters from "./components/Sorters";
import SearchInput from "./components/SearchInput";
import { WidgetCard } from "./components/WidgetCard";
import IWidget from "./interfaces/IWidget";
import widgets from "./mock-data/widgets";
import { genericSort } from "./utils/genericSort";
import { genericSearch } from "./utils/genericSearch";
import { genericFilter } from "./utils/genericFilter";
import { Filters } from "./components/Filters";
import IFilter from "./interfaces/IFilter";
import ISorter from "./interfaces/ISorter";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [activeSorter, setActiveSorter] = useState<ISorter<IWidget>>({
    property: "title",
    isDescending: true,
  });
  const [activeFilters, setActiveFilters] = useState<Array<IFilter<IWidget>>>(
    []
  );

  const resultWidgets = widgets
    .filter((widget) =>
      genericSearch<IWidget>(widget, ["title", "description"], query)
    )
    .filter((widget) => genericFilter<IWidget>(widget, activeFilters))
    .sort((widgetA, widgetB) =>
      genericSort<IWidget>(widgetA, widgetB, activeSorter)
    );

  return (
    <div className="container mx-auto my-2">
      <div className="my-3">
        <i>
          From the blog post{" "}
          <a href="https://chrisfrewin.com/blog/react-typescript-generic-search-sort-and-filters/">
            "React and TypeScript: Generic Search, Sorters, and Filters"
          </a>
          .
        </i>
      </div>
      <SearchInput onChangeSearchQuery={(query) => setQuery(query)} />
      <Sorters<IWidget>
        object={widgets[0]}
        onChangeSorter={(property, isDescending) => {
          setActiveSorter({
            property,
            isDescending,
          });
        }}
      />
      <Filters<IWidget>
        object={widgets[0]}
        filters={activeFilters}
        onChangeFilter={(changedFilterProperty, checked, isTruthyPicked) => {
          checked
            ? setActiveFilters([
                ...activeFilters.filter(
                  (filter) => filter.property !== changedFilterProperty
                ),
                { property: changedFilterProperty, isTruthyPicked },
              ])
            : setActiveFilters(
                activeFilters.filter(
                  (filter) => filter.property !== changedFilterProperty
                )
              );
        }}
      />
      <h3>Results:</h3>
      {resultWidgets.length > 0 && (
        <div className="row">
          {resultWidgets.map((widget) => (
            <WidgetCard key={widget.id} {...widget} />
          ))}
        </div>
      )}
      {resultWidgets.length === 0 && <p>No results found!</p>}
    </div>
  );
}
