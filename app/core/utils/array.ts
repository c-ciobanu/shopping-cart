export const updateObjectInArray = (array, index, updatedProperties) => {
  return array.map((item, arrayIndex) => {
    if (arrayIndex !== index) {
      return item
    }

    return { ...item, ...updatedProperties }
  })
}
