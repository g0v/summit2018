define({ "api": [
  {
    "type": "get",
    "url": "/static/airtable_data/SCHEDULE.json",
    "title": "Get /agenda page data",
    "name": "getAgendaPageInfo",
    "group": "agendaPage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[]._id",
            "optional": false,
            "field": "id",
            "description": "<p>airtable ID of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "ID",
            "description": "<p>The official ID of the agendum in the brochure</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "TITLE",
            "description": "<p>Displayed title of the agendum</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "TITLE_EN",
            "description": "<p>Displayed title of the agendum (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "ABSTRACT",
            "description": "<p>The brief description of this agendum</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "ABSTRACT_EN",
            "description": "<p>The brief description of this agendum (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].[String]",
            "optional": false,
            "field": "SPEAKER",
            "description": "<p>The airtable IDs of speakers</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "allowedValues": [
              "R0",
              "R1",
              "R2",
              "R3",
              "ALL"
            ],
            "optional": false,
            "field": "VENUE",
            "description": "<p>The venue of the agendum (<code>ALL</code> just means a session that takes whole <tr> of the agenda table, like a keynote or lunch :P)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "START",
            "description": "<p>The start time of the agendum in ISODate</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "END",
            "description": "<p>The end time of the agendum in ISODate</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "allowedValues": [
              "talk",
              "panel",
              "workshop",
              "keynote"
            ],
            "optional": false,
            "field": "TYPE",
            "description": "<p>The form of agendum</p>"
          },
          {
            "group": "Success 200",
            "type": "[].Boolean",
            "optional": false,
            "field": "SHOW",
            "description": "<p>Whether the sponsor should be displayed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": \"recEQLdDq2Sg9uRLa\",\n       \"TITLE\": \"開放政府聯絡人制度的挑戰與展望\",\n       \"VENUE\": \"R0\",\n       \"START\": \"2018-10-05T01:30:00.000Z\",\n       \"END\": \"2018-10-05T03:00:00.000Z\",\n       \"SPEAKER\": [\n         \"rec6sMP9TwkIQYfEk\",\n         \"recZuck1FGh5wUtli\",\n         \"recc0wWf8wLD5q6r5\"\n       ],\n       \"SHOW\": true,\n       \"TITLE_EN\": \"Participation Officer System: challenges and visions (translated)\",\n       \"ABSTRACT\": \"Participation officers network in Taiwanese government conduct workshops that engage diverse stakeholders to identify and define core problems, generate meaningful challenge statements, and co-create possible solutions to real issues and public projects. This process helps strengthen the quality of stakeholder collaborations and better inform our public policies. We believe that multi-stakeholder governance processes can reinforce the trust between citizens and the government.\\n\\nThe PO Network serves to drive cultural change; it plays a key role in Taiwan’s Open Government scene. POs are deeply involved in the conversation with civic society and governmental divisions, by tackling cross-ministerial issues with wider stakeholders openly and creatively. PO Network is a network of around 70 civil servants in the central government.\",\n       \"ABSTRACT_EN\": \"Participation officers network in Taiwanese government conduct workshops that engage diverse stakeholders to identify and define core problems, generate meaningful challenge statements, and co-create possible solutions to real issues and public projects. This process helps strengthen the quality of stakeholder collaborations and better inform our public policies. We believe that multi-stakeholder governance processes can reinforce the trust between citizens and the government.\\n\\nThe PO Network serves to drive cultural change; it plays a key role in Taiwan’s Open Government scene. POs are deeply involved in the conversation with civic society and governmental divisions, by tackling cross-ministerial issues with wider stakeholders openly and creatively. PO Network is a network of around 70 civil servants in the central government.\",\n       \"TYPE\": \"panel\",\n       \"ID\": \"125\"\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "static/airtable_data/index.js",
    "groupTitle": "agendaPage"
  },
  {
    "type": "get",
    "url": "/static/airtable_data/TRACK.json",
    "title": "Get the information of track of agenda",
    "name": "getTrackInfo",
    "group": "agendaPage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[]._id",
            "optional": false,
            "field": "id",
            "description": "<p>airtable ID of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "ID",
            "description": "<p>The official ID of the track in the brochure</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "NAME",
            "description": "<p>Displayed title of the track</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "NAME_EN",
            "description": "<p>Displayed title of the track (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "DESCRIPTION",
            "description": "<p>The brief description of this track</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "DESCRIPTION_EN",
            "description": "<p>The brief description of this track (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].[String]",
            "optional": false,
            "field": "MODERATOR",
            "description": "<p>The airtable IDs of moderator(s)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].[String]",
            "optional": false,
            "field": "SCHEDULE",
            "description": "<p>The airtable IDs of all included agenda</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": \"rech4bvhyHwtol6T5\",\n       \"NAME\": \"你的明白不是我的明白\",\n       \"DESCRIPTION\": \"面對公共議題，有哪些媒體、工具、平台能協助公眾理解、討論，進而參與決策？《你的明白不是我的明白》串連公民媒體沃草、議題釐清工具 sense.tw、數位經濟法規線上諮詢平台 vTaiwan 及公共數位創新空間 PDIS，嘗試將公眾參與政治分出階段，分享各自在「知情」、「討論」、「政策形成」的挫折與學習，產生對話與連結。\",\n       \"NAME_EN\": \"On informed discussion\",\n       \"SCHEDULE\": [\n         \"recLfBAHIGGQTN3sU\"\n       ],\n       \"ID\": 200,\n       \"MODERATOR\": [\n         \"rec7h6j8CnDxKA80l\"\n       ],\n       \"SPEAKERS copy\": \"【主持人】Peace\"\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "static/airtable_data/index.js",
    "groupTitle": "agendaPage"
  },
  {
    "type": "get",
    "url": "/static/airtable_data/SPEAKERS.json",
    "title": "Get /speakers page data",
    "name": "getSpeakersPageInfo",
    "group": "speakersPage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[]._id",
            "optional": false,
            "field": "id",
            "description": "<p>airtable ID of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "ID",
            "description": "<p>The official ID of the speaker (e.g. in the brochure)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "NAME",
            "description": "<p>The display name of speaker</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "NAME_EN",
            "description": "<p>Displayed The display name of speaker (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "TITLE1",
            "description": "<p>The 1st line of displayed title of the speaker</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "TITLE1_EN",
            "description": "<p>The 1st line of displayed title of the speaker (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "TITLE2",
            "description": "<p>The 2nd line of displayed title of the speaker</p>"
          },
          {
            "group": "Success 200",
            "type": "[].[String]",
            "optional": false,
            "field": "TITLE2_EN",
            "description": "<p>The 2nd line of displayed title of the speaker (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].Object",
            "optional": false,
            "field": "CROPPED_AVATAR",
            "description": "<p>The avatar image of provided by speaker (See below tab 'Example of image object' for an example)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].[_id]",
            "optional": false,
            "field": "SCHEDULE",
            "description": "<p>The airtable IDs of his/her agendum(agenda)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].Boolean",
            "optional": false,
            "field": "IS_MODERATOR",
            "description": "<p>Whether he/she is a moderator (of an agendum or a track)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].[_id]",
            "optional": false,
            "field": "TRACK",
            "description": "<p>The airtable IDs of the track in which he/she being the moderator</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "BIO",
            "description": "<p>The biography of the speaker</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "TWITTER",
            "description": "<p>The twitter account shared by speaker</p>"
          },
          {
            "group": "Success 200",
            "type": "[].Boolean",
            "optional": false,
            "field": "SHOW",
            "description": "<p>Whether the sponsor should be displayed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": \"recPIVzZ2EoJi1FvT\",\n       \"NAME\": \"王小明\",\n       \"NAME_EN\": \"Ming Wong\",\n       \"TITLE1\": \"曉明大學開源社\",\n       \"TITLE1_EN\": \"XMUOSC\",\n       \"TITLE2\": \"社長\",\n       \"TITLE2_EN\": \"President\"\",\n       \"CROPPED_AVATAR\": [\n         \"// See next tab 'Example of image object' for an example\"\n       ],\n       \"SCHEDULE\": [\n         \"recsqfmLaYIall9w7\"\n       ],\n       \"BIO\": \"小明是個3歲就開始寫code的開源大神，...\",\n       \"TWITTER\": \"@ming_wong_xmuosc\",\n       \"SHOW\": true,\n       \"ID\": 666\n   },\n   ...\n]",
          "type": "json"
        },
        {
          "title": "Example of image object",
          "content": "[\n    ...\n    [KEY]: {\n      \"id\": \"attgkp5Ay0Y9vn5S3\",\n      \"url\": \"https://dl.airtable.com/YReBtbvKTomXClPuVyn4_FILENAME.png\",\n      \"filename\": \"FILENAME.png\",\n      \"size\": 12345,\n      \"type\": \"image/png\",\n      \"thumbnails\": {\n        \"small\": {\n          \"url\": \"https://dl.airtable.com/urqTHApBRhajDS14xPWl_small_FILENAME.png\",\n          \"width\": 68,\n          \"height\": 36\n        },\n        \"large\": {\n          \"url\": \"https://dl.airtable.com/HRZneuQj2EQ01CPdZD1w_large_FILENAME.png\",\n          \"width\": 263,\n          \"height\": 140\n        },\n        \"full\": {\n          \"url\": \"https://dl.airtable.com/G4BW3NfqR2a5QxpuqiEu_full_FILENAME.png\",\n          \"width\": 263,\n          \"height\": 140\n        }\n      }\n    }\n    ...\n]",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "static/airtable_data/index.js",
    "groupTitle": "speakersPage"
  },
  {
    "type": "get",
    "url": "/static/airtable_data/SPONSORS.json",
    "title": "Get /sponsor page data",
    "name": "getSponsorPageInfo",
    "group": "sponsorPage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[]._id",
            "optional": false,
            "field": "id",
            "description": "<p>airtable ID of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "NAME-CH",
            "description": "<p>The working group that the sponsor belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "NAME",
            "description": "<p>Displayed name of the sponsor (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "BIO-CH",
            "description": "<p>Introduction of the sponsor</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "BIO",
            "description": "<p>Introduction of the sponsor (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].Object",
            "optional": false,
            "field": "CROPPED_LOGO",
            "description": "<p>The logo of sponsor (See below tab 'Example of image object' for an example)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "allowedValues": [
              "EVANGELIST",
              "ACTIVIST",
              "CIVICIST",
              "SUPPORTER",
              "IN_KIND",
              "MEDIA_PARTNER",
              "PROMOTING_PARTNER"
            ],
            "optional": false,
            "field": "CLASS",
            "description": "<p>The class of sponsor</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "URL",
            "description": "<p>The website of sponsor</p>"
          },
          {
            "group": "Success 200",
            "type": "[].Boolean",
            "optional": false,
            "field": "SHOW",
            "description": "<p>Whether the sponsor should be displayed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": \"recZYSpM3N5ijS7ET\",\n       \"NAME\": \"Digital Taiwan Roundtable\",\n       \"BIO\": \"To enhance the competitiveness of Taiwan, we gathered people from the industry, government, universities, and research institutes to established the national “Digital Taiwan Roundtable” to bring together all the professionals and intelligence. We advocate the required adjustments of regulations and policies for digital transformation in industries and the society.  *           \\nDigital Taiwan Roundtable is a non-profit organization. Its mission is to promote the development of digital technology in various industries and to advice the government in formulating proactive policies, in order to enhance the international competitiveness advantages in digital technology related industries. \",\n       \"CROPPED_LOGO\": [\n         \"// See next tab 'Example of image object' for an example\"\n       ],\n       \"CLASS\": \"EVANGELIST\",\n       \"NAME-CH\": \"台灣數位科技與政策協進會\",\n       \"BIO-CH\": \"基於數位科技對於台灣競爭力之重要性，我們結合具共同理念與理想的產、官、學、研人士，成立全國性的「台灣數位科技與政策協進會」，期望藉此匯集專業與智慧，整合數位科技對各行各業發展所需的法規與政策，對政府建言並提供各界參考，以產生對數位科技產業進行結構性翻轉的效益。\\n本會為依法設立，非以營利為目的之社會團體，以促進各行各業結合數位科技發展，及建議政府制定前瞻性相關政策，促使數位科技相關產業具國際競爭優勢為宗旨。\",\n       \"URL\": \"https://digitaltaiwan.org/\",\n       \"SHOW\": true\n   },\n   ...\n]",
          "type": "json"
        },
        {
          "title": "Example of image object",
          "content": "[\n    ...\n    [KEY]: {\n      \"id\": \"attgkp5Ay0Y9vn5S3\",\n      \"url\": \"https://dl.airtable.com/YReBtbvKTomXClPuVyn4_FILENAME.png\",\n      \"filename\": \"FILENAME.png\",\n      \"size\": 12345,\n      \"type\": \"image/png\",\n      \"thumbnails\": {\n        \"small\": {\n          \"url\": \"https://dl.airtable.com/urqTHApBRhajDS14xPWl_small_FILENAME.png\",\n          \"width\": 68,\n          \"height\": 36\n        },\n        \"large\": {\n          \"url\": \"https://dl.airtable.com/HRZneuQj2EQ01CPdZD1w_large_FILENAME.png\",\n          \"width\": 263,\n          \"height\": 140\n        },\n        \"full\": {\n          \"url\": \"https://dl.airtable.com/G4BW3NfqR2a5QxpuqiEu_full_FILENAME.png\",\n          \"width\": 263,\n          \"height\": 140\n        }\n      }\n    }\n    ...\n]",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "static/airtable_data/index.js",
    "groupTitle": "sponsorPage"
  },
  {
    "type": "get",
    "url": "/static/airtable_data/STAFF.json",
    "title": "Get /staff page data",
    "name": "getStaffPageInfo",
    "group": "staffPage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[]._id",
            "optional": false,
            "field": "id",
            "description": "<p>airtable ID of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "NAME",
            "description": "<p>Displayed name of the staff</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "NAME_EN",
            "description": "<p>Displayed name of the staff (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "TITLE",
            "description": "<p>The displayed title of the staff</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "TITLE_EN",
            "description": "<p>The displayed title of the staff (english version)</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "GROUP",
            "description": "<p>The working group that the staff belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "[].String",
            "optional": false,
            "field": "MAIN_GROUP",
            "description": "<p>The main working group that the staff belongs to (currently not displayed on the page)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       id: \"rec11WyYanU5Y0rJS\",\n       NAME: \"Lawrence\",\n       TITLE: \"網站\",\n       TITLE_EN: \"Website\",\n       GROUP: \"網站 APP 組\",\n       NAME_EN: \"Lawrence\",\n       MAIN_GROUP: \"宣傳大組\"\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "static/airtable_data/index.js",
    "groupTitle": "staffPage"
  }
] });
