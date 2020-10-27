import * as React from "react";

export interface ISortersProps<T> {
  object: T;
  onChangeSorter: (
    sortProperty: keyof T,
    isDescending: boolean
  ) => void;
}

export default function Sorters<T>(props: ISortersProps<T>) {
  const { object, onChangeSorter } = props;
  return (
    <>
      <label htmlFor="sorters" className="mt-3">Sorters! Try us too! (We also work!)</label>
      <select
        id="sorters"
        className="custom-select"
        onChange={(event) =>
          onChangeSorter(
            event.target.value.split(",")[0] as any,
            event.target.value.split(",")[1] === "true"
          )
        }
        defaultValue={["title", "true"]}
      >
        {Object.keys(object).map((key) => {
          if (!key) {
            return <></>
          }
          return (
            <>
              <option
                key={`${key}-true`}
                value={[key, "true"]}
              >
                sort by '{key}' descending
              </option>
              <option
                key={`${key}-false`}
                value={[key, "false"]}
              >
                sort by '{key}' ascending
              </option>
            </>
          );
        })}
      </select>
    </>
  );
}
