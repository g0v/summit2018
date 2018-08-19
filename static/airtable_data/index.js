import get from 'lodash/get'
import find from 'lodash/find'
import assign from 'lodash/assign'
import SPEAKERS from './SPEAKERS.json'
import SCHEDULE from './SCHEDULE.json'
import STAFF from './STAFF.json'

// 展開 Airtable 回傳的 json 中的 `fields` 欄位
export const extractFields = record => assign({ id: record.id }, record.fields)

export const extractAllFields = records => records.map(extractFields)

/**
 * @param {Object} record Airtable response 的單個 json object
 * @param {String} path record 中要 populate 的 Object key 位置
 * @param {Object[]} linkedRecords 用來 populate 用的資料
 */
export const populateRecord = (record, path, linkedRecords) => {
  const fk = get(record, `${path}[0]`)
  const value = find(linkedRecords, ['id', fk])
  return assign(record, { [path]: value })
}

/**
 * @param {Object[]} records Airtable response 中的 records
 * @param {String} path record 中要 populate 的 Object key 位置
 * @param {Object[]} linkedRecords 用來 populate 用的資料
 */
export const populateRecords = (records, path, linkedRecords) =>
  records.map(record => populateRecord(record, path, linkedRecords))

export const POPULATED_SPEAKERS = populateRecords(
  extractAllFields(SPEAKERS.records),
  'SCHEDULE',
  extractAllFields(SCHEDULE.records)
)

export const POPULATED_SCHEDULE = populateRecords(
  extractAllFields(SCHEDULE.records),
  'SPEAKER',
  extractAllFields(SPEAKERS.records)
)

export const POPULATED_STAFF = extractAllFields(STAFF.records)
