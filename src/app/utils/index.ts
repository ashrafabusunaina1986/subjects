export const fCs: Array<any> = [
  {
    name: "title",
    ct: "input",
    t: "text",
    placeholder: "Title",
    label: "Title",
  },
  {
    name: "description",
    ct: "textarea",
    placeholder: "Description",
    label: "Description",
  },
  {
    name: "country",
    ct: "input",
    t: "text",
    placeholder: "Country",
    label: "Country",
  },
  {
    name: "city",
    ct: "input",
    t: "text",
    placeholder: "City",
    label: "City",
  },
  {
    name: "region",
    ct: "input",
    t: "text",
    placeholder: "Region",
    label: "Region",
  },
  {
    name: "image",
    ct: "input",
    t: "file",
    label: "Select Image",
  },
];

export const initialFcs = {
  image: "",
  region: "",
  country: "",
  city: "",
  title: "",
  description: "",
  pathname: "",
  url: "",
};
export const v = (f: any) => {
  return f && Object.values(f).every((i) => i && i.toString().trim() !== "");
};
