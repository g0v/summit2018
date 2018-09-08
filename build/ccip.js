const fs = require('fs')

let schedule = require('../static/airtable_data/SCHEDULE.json')
let speakers = require('../static/airtable_data/SPEAKERS.json')

res = []

for(i = 0; i < schedule.length; i++) {
  tmp = schedule[i]

  tmp.room = tmp.VENUE
  tmp.start = tmp.START
  tmp.end = tmp.END
  tmp.type = tmp.TYPE != undefined ? tmp.TYPE : ""

  tmp.zh = {
    subject: tmp.TITLE != undefined ? tmp.TITLE : tmp.TITLE_EN != undefined ? tmp.TITLE_EN : "",
    summary: tmp.ABSTRACT != undefined ? tmp.ABSTRACT : tmp.ABSTRACT_EN != undefined ? tmp.ABSTRACT_EN : ""
  }

  tmp.en = {
    subject: tmp.TITLE_EN != undefined ? tmp.TITLE_EN : tmp.TITLE != undefined ? tmp.TITLE : "",
    summary: tmp.ABSTRACT_EN != undefined ? tmp.ABSTRACT_EN : tmp.ABSTRACT != undefined ? tmp.ABSTRACT : ""
  }

  if(tmp.SPEAKER != undefined) {
    tmp.speakers = []
    for(j = 0; j < tmp.SPEAKER.length; j++) {
      speaker = speakers.find(sp => {
        return sp.id === tmp.SPEAKER[j]
      })

      if(speaker.avatar != undefined) {
        tmp.speakers.push(speaker)
        continue
      }

      if(speaker.CROPPED_AVATAR != undefined) {
        speaker.avatar = speaker.CROPPED_AVATAR[0].thumbnails.full.url
      }

      speaker.zh = {
        name: speaker.NAME != undefined ? speaker.NAME : speaker.NAME_EN != undefined ? speaker.NAME_EN : "",
        bio: speaker.BIO != undefined ? speaker.BIO : speaker.BIO_EN != undefined ? speaker.BIO_EN : ""
      }

      speaker.en = {
        name: speaker.NAME_EN != undefined ? speaker.NAME_EN : speaker.NAME != undefined ? speaker.NAME : "",
        bio: speaker.BIO_EN != undefined ? speaker.BIO_EN : speaker.BIO != undefined ? speaker.BIO : ""
      }

      delete speaker.BIO
      delete speaker.BIO_EN
      delete speaker.CROPPED_AVATAR
      delete speaker.ID
      delete speaker.NAME
      delete speaker.NAME_EN
      delete speaker.SCHEDULE
      delete speaker.SHOW
      delete speaker.TITLE1
      delete speaker.TITLE1_EN
      delete speaker.TWITTER

      tmp.speakers.push(speaker)
    }
  }

  delete tmp.ABSTRACT
  delete tmp.ABSTRACT_EN
  delete tmp.END
  delete tmp.ID
  delete tmp.SHOW
  delete tmp.SPEAKER
  delete tmp.START
  delete tmp.TITLE
  delete tmp.TITLE_EN
  delete tmp.TRACK
  delete tmp.TYPE
  delete tmp.VENUE
  res.push(tmp)
}

fs.writeFile('static/ccip.json', JSON.stringify(res), (err) => {
  if (err) throw err
})

