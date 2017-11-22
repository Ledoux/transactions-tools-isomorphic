
import { SORT,
  LIMIT,
  SKIP
} from '../constants'

export const afterConstants = [ SORT,
  LIMIT,
  SKIP
]

export const afterMethodNames = afterConstants.map(constant =>
  constant.match(/_(.*)_/)[1].toLowerCase())
  
/*
export function getFromRequestQuery (query = {}) {
  const fromRequestQuery = {}
  Object.keys(query)
    .forEach(key => {
      // remove the request config keys
      if (requestConfigConstants.includes(key)) {
        return
      }
      // parse
      const value = query[key]
      let fromRequestValue = value
      if (value) {
        const parseMatch = value.match && value.match(/_PARSE_(.*)/)
        if (parseMatch && parseMatch[1]) {
          const notEqualMatch = parseMatch[1]
          const object = JSON.parse(notEqualMatch)
          const objectKeys = Object.keys(object)
          if (objectKeys[0] === '$ne') {
            const notEqualValue = object[objectKeys[0]]
            fromRequestValue = `_not_${notEqualValue}`
          }
        } else {
          const inValue = value['$in']
          if (inValue) {
            fromRequestValue = `_has_${inValue}`
          } else {
            const ninValue = value['$nin']
            if (ninValue) {
              fromRequestValue = `_hasnt_${ninValue.join(',')}`
            }
          }
        }
      }
      fromRequestQuery[key] = fromRequestValue
    })
  return fromRequestQuery
}
*/