export interface getProductPropsType {
  page: string;
  sort: string;
}

interface SearchSortDataType {
  value: string;
}

// product sort data
export const SearchSortData: SearchSortDataType[] = [
  { value: "점수 높은순" },
  { value: "점수 낮은순" },
];

// sort type 변환
export const toSortType = (value: string) => {
  let type = "";

  switch (value) {
    case "점수 낮은순":
      type = "asc";
      break;

    case "점수 높은순":
      type = "desc";
      break;

    default:
      type = "desc";
      break;
  }

  return type;
};
