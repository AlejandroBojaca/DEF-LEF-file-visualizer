
export const readFile = (file:any=null) => {
  if (file=== null) return false

  const reader = new FileReader()
  reader.onloadend = () => console.log(reader.result)
  reader.readAsText(file)

  return true
}