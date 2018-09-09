import get from 'lodash/get'
import find from 'lodash/find'
import assign from 'lodash/assign'
import SPEAKERS from './SPEAKERS.json'
import SCHEDULE from './SCHEDULE.json'

/**
 *
 * @api {get} /static/airtable_data/SCHEDULE.json  Get /agenda page data
 * @apiName getAgendaPageInfo
 * @apiGroup agendaPage
 *
 * @apiSuccess {[]._id} id airtable ID of the record
 * @apiSuccess {[].String} ID The official ID of the agendum in the brochure
 * @apiSuccess {[].String} TITLE Displayed title of the agendum
 * @apiSuccess {[].String} TITLE_EN Displayed title of the agendum (english version)
 * @apiSuccess {[].String} ABSTRACT The brief description of this agendum
 * @apiSuccess {[].String} ABSTRACT_EN The brief description of this agendum (english version)
 * @apiSuccess {[].[String]} SPEAKER The airtable IDs of speakers
 * @apiSuccess {[].String=R0, R1, R2, R3, ALL} VENUE The venue of the agendum (`ALL` just means a session that takes whole <tr> of the agenda table, like a keynote or lunch :P)
 * @apiSuccess {[].String} START The start time of the agendum in ISODate
 * @apiSuccess {[].String} END The end time of the agendum in ISODate
 * @apiSuccess {[].String=talk, panel, workshop, keynote} TYPE The form of agendum
 * @apiSuccess {[].Boolean} SHOW Whether the sponsor should be displayed
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *       {
 *           "id": "recEQLdDq2Sg9uRLa",
 *           "TITLE": "開放政府聯絡人制度的挑戰與展望",
 *           "VENUE": "R0",
 *           "START": "2018-10-05T01:30:00.000Z",
 *           "END": "2018-10-05T03:00:00.000Z",
 *           "SPEAKER": [
 *             "rec6sMP9TwkIQYfEk",
 *             "recZuck1FGh5wUtli",
 *             "recc0wWf8wLD5q6r5"
 *           ],
 *           "SHOW": true,
 *           "TITLE_EN": "Participation Officer System: challenges and visions (translated)",
 *           "ABSTRACT": "Participation officers network in Taiwanese government conduct workshops that engage diverse stakeholders to identify and define core problems, generate meaningful challenge statements, and co-create possible solutions to real issues and public projects. This process helps strengthen the quality of stakeholder collaborations and better inform our public policies. We believe that multi-stakeholder governance processes can reinforce the trust between citizens and the government.\n\nThe PO Network serves to drive cultural change; it plays a key role in Taiwan’s Open Government scene. POs are deeply involved in the conversation with civic society and governmental divisions, by tackling cross-ministerial issues with wider stakeholders openly and creatively. PO Network is a network of around 70 civil servants in the central government.",
 *           "ABSTRACT_EN": "Participation officers network in Taiwanese government conduct workshops that engage diverse stakeholders to identify and define core problems, generate meaningful challenge statements, and co-create possible solutions to real issues and public projects. This process helps strengthen the quality of stakeholder collaborations and better inform our public policies. We believe that multi-stakeholder governance processes can reinforce the trust between citizens and the government.\n\nThe PO Network serves to drive cultural change; it plays a key role in Taiwan’s Open Government scene. POs are deeply involved in the conversation with civic society and governmental divisions, by tackling cross-ministerial issues with wider stakeholders openly and creatively. PO Network is a network of around 70 civil servants in the central government.",
 *           "TYPE": "panel",
 *           "ID": "125"
 *       },
 *       ...
 *    ]
 *
 */
export { default as SCHEDULE } from './SCHEDULE.json'

/**
 *
 * @api {get} /static/airtable_data/SPEAKERS.json  Get /speakers page data
 * @apiName getSpeakersPageInfo
 * @apiGroup speakersPage
 *
 * @apiSuccess {[]._id} id airtable ID of the record
 * @apiSuccess {[].String} ID The official ID of the speaker (e.g. in the brochure)
 * @apiSuccess {[].String} NAME The display name of speaker
 * @apiSuccess {[].String} NAME_EN Displayed The display name of speaker (english version)
 * @apiSuccess {[].String} TITLE1 The 1st line of displayed title of the speaker
 * @apiSuccess {[].String} TITLE1_EN The 1st line of displayed title of the speaker (english version)
 * @apiSuccess {[].String} TITLE2 The 2nd line of displayed title of the speaker
 * @apiSuccess {[].[String]} TITLE2_EN The 2nd line of displayed title of the speaker (english version)
 * @apiSuccess {[].Object} CROPPED_AVATAR The avatar image of provided by speaker (See below tab 'Example of image object' for an example)
 * @apiSuccess {[].[_id]} SCHEDULE The airtable IDs of his/her agendum(agenda)
 * @apiSuccess {[].String} BIO The biography of the speaker
 * @apiSuccess {[].String} TWITTER The twitter account shared by speaker
 * @apiSuccess {[].Boolean} SHOW Whether the sponsor should be displayed
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *       {
 *           "id": "recPIVzZ2EoJi1FvT",
 *           "NAME": "王小明",
 *           "NAME_EN": "Ming Wong",
 *           "TITLE1": "曉明大學開源社",
 *           "TITLE1_EN": "XMUOSC",
 *           "TITLE2": "社長",
 *           "TITLE2_EN": "President"",
 *           "CROPPED_AVATAR": [
 *             "// See next tab 'Example of image object' for an example"
 *           ],
 *           "SCHEDULE": [
 *             "recsqfmLaYIall9w7"
 *           ],
 *           "BIO": "小明是個3歲就開始寫code的開源大神，...",
 *           "TWITTER": "@ming_wong_xmuosc",
 *           "SHOW": true,
 *           "ID": 666
 *       },
 *       ...
 *    ]
 *
 * @apiUse ImageObject
 *
 */
export { default as SPEAKERS } from './SPEAKERS.json'

/**
 *
 * @api {get} /static/airtable_data/STAFF.json  Get /staff page data
 * @apiName getStaffPageInfo
 * @apiGroup staffPage
 *
 * @apiSuccess {[]._id} id airtable ID of the record
 * @apiSuccess {[].String} NAME Displayed name of the staff
 * @apiSuccess {[].String} NAME_EN Displayed name of the staff (english version)
 * @apiSuccess {[].String} TITLE The displayed title of the staff
 * @apiSuccess {[].String} TITLE_EN The displayed title of the staff (english version)
 * @apiSuccess {[].String} GROUP The working group that the staff belongs to
 * @apiSuccess {[].String} MAIN_GROUP The main working group that the staff belongs to (currently not displayed on the page)
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *       {
 *           id: "rec11WyYanU5Y0rJS",
 *           NAME: "Lawrence",
 *           TITLE: "網站",
 *           TITLE_EN: "Website",
 *           GROUP: "網站 APP 組",
 *           NAME_EN: "Lawrence",
 *           MAIN_GROUP: "宣傳大組"
 *       },
 *       ...
 *    ]
 *
 */
export { default as STAFF } from './STAFF.json'

/**
 *
 * @api {get} /static/airtable_data/SPONSORS.json  Get /sponsor page data
 * @apiName getSponsorPageInfo
 * @apiGroup sponsorPage
 *
 * @apiSuccess {[]._id} id airtable ID of the record
 * @apiSuccess {[].String} NAME-CH The working group that the sponsor belongs to
 * @apiSuccess {[].String} NAME Displayed name of the sponsor (english version)
 * @apiSuccess {[].String} BIO-CH Introduction of the sponsor
 * @apiSuccess {[].String} BIO Introduction of the sponsor (english version)
 * @apiSuccess {[].Object} CROPPED_LOGO The logo of sponsor (See below tab 'Example of image object' for an example)
 * @apiSuccess {[].String=EVANGELIST, ACTIVIST, CIVICIST, SUPPORTER, IN_KIND, MEDIA_PARTNER, PROMOTING_PARTNER} CLASS The class of sponsor
 * @apiSuccess {[].String} URL The website of sponsor
 * @apiSuccess {[].Boolean} SHOW Whether the sponsor should be displayed
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *       {
 *           "id": "recZYSpM3N5ijS7ET",
 *           "NAME": "Digital Taiwan Roundtable",
 *           "BIO": "To enhance the competitiveness of Taiwan, we gathered people from the industry, government, universities, and research institutes to established the national “Digital Taiwan Roundtable” to bring together all the professionals and intelligence. We advocate the required adjustments of regulations and policies for digital transformation in industries and the society.  *           \nDigital Taiwan Roundtable is a non-profit organization. Its mission is to promote the development of digital technology in various industries and to advice the government in formulating proactive policies, in order to enhance the international competitiveness advantages in digital technology related industries. ",
 *           "CROPPED_LOGO": [
 *             "// See next tab 'Example of image object' for an example"
 *           ],
 *           "CLASS": "EVANGELIST",
 *           "NAME-CH": "台灣數位科技與政策協進會",
 *           "BIO-CH": "基於數位科技對於台灣競爭力之重要性，我們結合具共同理念與理想的產、官、學、研人士，成立全國性的「台灣數位科技與政策協進會」，期望藉此匯集專業與智慧，整合數位科技對各行各業發展所需的法規與政策，對政府建言並提供各界參考，以產生對數位科技產業進行結構性翻轉的效益。\n本會為依法設立，非以營利為目的之社會團體，以促進各行各業結合數位科技發展，及建議政府制定前瞻性相關政策，促使數位科技相關產業具國際競爭優勢為宗旨。",
 *           "URL": "https://digitaltaiwan.org/",
 *           "SHOW": true
 *       },
 *       ...
 *    ]
 * @apiUse ImageObject
 *
 */
export { default as SPONSORS } from './SPONSORS.json'

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

export const POPULATED_SPEAKERS = populateRecords(
  SPEAKERS,
  'SCHEDULE',
  SCHEDULE
)

export const POPULATED_SCHEDULE = populateRecords(SCHEDULE, 'SPEAKER', SPEAKERS)

/**
 * @apiDefine ImageObject
 * @apiSuccessExample {Object} Example of image object
 * [
 *     ...
 *     [KEY]: {
 *       "id": "attgkp5Ay0Y9vn5S3",
 *       "url": "https://dl.airtable.com/YReBtbvKTomXClPuVyn4_FILENAME.png",
 *       "filename": "FILENAME.png",
 *       "size": 12345,
 *       "type": "image/png",
 *       "thumbnails": {
 *         "small": {
 *           "url": "https://dl.airtable.com/urqTHApBRhajDS14xPWl_small_FILENAME.png",
 *           "width": 68,
 *           "height": 36
 *         },
 *         "large": {
 *           "url": "https://dl.airtable.com/HRZneuQj2EQ01CPdZD1w_large_FILENAME.png",
 *           "width": 263,
 *           "height": 140
 *         },
 *         "full": {
 *           "url": "https://dl.airtable.com/G4BW3NfqR2a5QxpuqiEu_full_FILENAME.png",
 *           "width": 263,
 *           "height": 140
 *         }
 *       }
 *     }
 *     ...
 * ]
 */
