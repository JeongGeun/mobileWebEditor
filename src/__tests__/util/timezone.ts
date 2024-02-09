import { getKorTime } from "@/util/timezone";


describe('getKorTime',()=>{
    it('getKorTime 함수를 사용하여 UTC에서 KST로 Timezone을 한국 시간(+9시간)으로 변경한다.',()=>{
        const date = new Date('2024-01-01T00:00:00Z');
        const UTCDate = new Date(date.toUTCString());
        
        expect(getKorTime(UTCDate)).toBe("2024-01-01T09:00:00Z");
    })
})
