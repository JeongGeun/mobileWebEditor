import { URLS } from '@/apis'
import { http, HttpResponse } from 'msw'

export const handlers = [
    http.post(URLS.INVITATION_LIST, () => {
        // Note that you DON'T have to stringify the JSON!
        return HttpResponse.json([
            {
                "_id": "657f2808a2ec0b8d24b1e483",
                "type": "A",
                "inspectorNumber": 0,
                "block": {
                    "husbandName": "마지막신랑",
                    "wifeName": "마지막신부"
                },
                "date": "2023-12-18T01:55:16Z",
                "title": "마지막신랑님 & 마지막신부님의 청첩장",
                "createdBy": "Goony"
            }
        ])
    }),
]