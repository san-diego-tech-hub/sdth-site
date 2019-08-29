export const languageOptions = [
  { value: "HTML/CSS", label: "HTML/CSS" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
  { value: "Golang", label: "Golang" },
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "C#", label: "C#" },
  { value: "Swift", label: "Swift" },
  { value: "Objective-C", label: "Objective-C" },
]

export const frameworkOptions = [
  { value: "NodeJS", label: "NodeJS" },
  { value: "React", label: "React" },
  { value: "Angular", label: "Angular" },
  { value: "Vue", label: "Vue" },
  { value: "EmberJS", label: "EmberJS" },
  { value: ".NET", label: ".NET" },
  { value: "Gatsby", label: "Gatsby" },
]

export const libraryOptions = [
  { value: "jQuery", label: "jQuery" },
  { value: "Redux", label: "Redux" },
]

export const groupedOptions = [
  {
    label: "Languages",
    options: languageOptions,
  },
  {
    label: "Frameworks",
    options: frameworkOptions,
  },
  {
    label: "Libraries",
    options: libraryOptions
  }
]
