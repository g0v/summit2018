import every from 'lodash/every'
import entries from 'lodash/entries'

export const getObjectValidator = schema => object => {
  return every(
    entries(schema).map(([key, typeConstructor]) => {
      const value = object[key]
      let isValid
      let type
      switch (typeConstructor) {
        // Primitive types
        case String:
          type = 'string'
          isValid = typeof value === 'string'
          break
        case Number:
          type = 'number'
          isValid = typeof value === 'number'
          break
        case Boolean:
          type = 'boolean'
          isValid = typeof value === 'boolean'
          break
        // Object, Array, Date ... etc
        default:
          type = typeConstructor.name
          isValid = value instanceof typeConstructor
          break
      }
      if (!isValid) {
        console.error(
          `\`${key}\` should be a ${type}, instead received ${typeof value}: ${value}`
        )
      }
      return isValid
    })
  )
}

export const getObjectsValidator = schema => objects => {
  const objectValidator = getObjectValidator(schema)
  const checkObject = object => objectValidator(object)

  return every(objects.map(checkObject))
}
