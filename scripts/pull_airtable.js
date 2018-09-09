const fs = require('fs')
const path = require('path')
const Airtable = require('airtable')

const TABLE_NAMES = [
  // 'NEWS',
  'SPONSORS',
  'SCHEDULE',
  'SPEAKERS',
  // 'STREAMING',
  'STAFF',
  // 'SOUVENIR',
  // NOTE: 不要擔心 commend 掉的 table 裡沒什麼了不起的敏感資料，只是我現在還懶得寫它們的 doc，等用到時再說吧
]

const DIR_NAME = '../static/airtable_data'

let base = new Airtable({
  apiKey: process.env.AIRTABLE_KEY_G0V_SUMMIT_2018,
}).base('appE5bjcvPZjbkp81')

TABLE_NAMES.forEach(TABLE_NAME => {
  let records = []

  base(TABLE_NAME)
    .select({
      view: 'Grid view',
    })
    .eachPage(
      function page(partialRecords, fetchNextPage) {
        records = [...records, ...partialRecords]
        fetchNextPage()
      },
      function done(err) {
        if (err) {
          console.error(err)
        }

        const filePath = path.resolve(
          __dirname,
          `${DIR_NAME}/${TABLE_NAME}.json`
        )

        const data = records.map(
          record =>
            '\n' +
            JSON.stringify({ id: record.getId(), ...record.fields }, null, 2)
        )

        fs.writeFile(filePath, `[${data}]`, err => {
          if (err) {
            console.error(err)
            return
          }
          console.log(`Saved ${records.length} records to ${filePath}`)
          records = []
        })
      }
    )
})
