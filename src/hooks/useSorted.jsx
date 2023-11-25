import { useSearchParams } from "react-router-dom";

export function useSorted(data) {
  const [searchParams, setSearchParams] = useSearchParams({ s: null });
  const val = searchParams.get("s");
  function compare(a, b) {
    var dateA = new Date(a.created);
    var dateB = new Date(b.created);
    if (val === "ASC") {
      return dateB - dateA;
    } else if (val === "DESC") {
      return dateA - dateB;
    }
  }
  const sortedData = val !== null ? data.sort(compare) : data;
  console.log(sortedData);
  return [sortedData, val, setSearchParams];
}
