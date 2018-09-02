import get from 'lodash/get'
import find from 'lodash/find'
import assign from 'lodash/assign'
import SPEAKERS from './SPEAKERS.json'
import SCHEDULE from './SCHEDULE.json'
import STAFF from './STAFF.json'

/**
 * @param {Object} record Airtable response 的單個 json object
 * @param {String} path record 中要 populate 的 Object key 位置
 * @param {Object[]} linkedRecords 用來 populate 用的資料
 */
export const populateRecord = (record, path, linkedRecords) => {
  const fks = get(record, `${path}`)
  // TODO: Airtable 回來的 [<foreign key>] 不知為何順序倒過來，如果之後修好了再拿掉 reverse()
  const values = fks
    ? fks.reverse().map(fk => find(linkedRecords, ['id', fk]))
    : []
  return assign(record, { [path]: values })
}

/**
 * @param {Object[]} records Airtable response 中的 records
 * @param {String} path record 中要 populate 的 Object key 位置
 * @param {Object[]} linkedRecords 用來 populate 用的資料
 */
export const populateRecords = (records, path, linkedRecords) =>
  records.map(record => populateRecord(record, path, linkedRecords))

export const POPULATED_SPEAKERS = populateRecords(SPEAKERS, 'SCHEDULE', SCHEDULE)

export const POPULATED_SCHEDULE = populateRecords(SCHEDULE, 'SPEAKER', SPEAKERS)
