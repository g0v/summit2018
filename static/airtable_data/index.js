import _ from 'lodash'
import SPEAKERS from './SPEAKERS.json'
import SCHEDULE from './SCHEDULE.json'
import STAFF from './STAFF.json'

// 展開 Airtable 回傳的 json 中的 `fields` 欄位
const extractFields = record => _.assign({ id: record.id }, record.fields)

const extractAllFields = records => records.map(extractFields)

/**
 *
 * @param {Object} record Airtable response 的單個 json object
 * @param {String} path record 中要 normalize 的 Object key 位置
 * @param {*} linkedRecords 用來 normalize 用的資料
 */
const normalizeRecord = (record, path, linkedRecords) => {
  const fk = _.get(record, `${path}[0]`)
  const value = _.find(linkedRecords, ['id', fk])
  return _.assign(record, { [path]: value })
}

const normalize = (records, path, linkedRecords) =>
  records.map(record => normalizeRecord(record, path, linkedRecords))

export const NORMALIZED_SPEAKERS = normalize(
  extractAllFields(SPEAKERS.records),
  'SCHEDULE',
  extractAllFields(SCHEDULE.records)
)

export const NORMALIZED_SCHEDULE = normalize(
  extractAllFields(SCHEDULE.records),
  'SPEAKER',
  extractAllFields(SPEAKERS.records)
)

export const NORMALIZED_STAFF = extractAllFields(STAFF.records)
