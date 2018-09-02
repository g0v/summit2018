const fs = require('fs')
const path = require('path')
const Airtable = require('airtable')

const TABLE_NAMES = [
  'NEWS',
  'SPONSORS',
  'SCHEDULE',
  'SPEAKERS',
  'STREAMING',
  'STAFF',
  'SOUVENIR',
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

// const TABLE_NAME = 'STREAMING'
// let records = []

// // called for every page of records
// const processPage = (partialRecords, fetchNextPage) => {
//   records = [...records, ...partialRecords]
//   fetchNextPage()
// }

// // called when all the records have been retrieved
// const processRecords = err => {
//   if (err) {
//     console.error(err)
//   }

//   const data = records.map(record => JSON.stringify(record.fields, null, 2))

//   const filePath = path.resolve(__dirname, `${DIR_NAME}/${TABLE_NAME}.json`)
//   fs.writeFile(filePath, `[${data}]`, err => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(`Saved records to ${DIR_NAME}/${TABLE_NAME}.json`)
//   })
// }

// base(TABLE_NAME)
//   .select({
//     view: 'Grid view',
//   })
//   .eachPage(processPage, processRecords)
