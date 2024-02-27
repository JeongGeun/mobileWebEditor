import MainPage from '@/app/main/page'
import { TestWrapper } from '@/util/test/wrapper';
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn()
}));


const mockRouter = {
    push: jest.fn() // the component uses `router.push` only
};
(useRouter as jest.Mock).mockReturnValue(mockRouter);


describe('Main 페이지', () => {

    beforeEach(() => {
        render(<MainPage />, { wrapper: TestWrapper() });

    })

    it("타이틀이 모청 리스트 인지 확인한다.", () => {
        const header = screen.getByRole('heading');
        expect(header).toHaveTextContent("모청 리스트");
    })

    it("등록하기 버튼 클릭 시 next/navigation의 push 함수를 실행하고 editor 페이지로 이동한다.", () => {
        const registrationButton = screen.getByRole("button");
        fireEvent.click(registrationButton);
        expect(mockRouter.push).toHaveBeenCalledTimes(1);
        expect(mockRouter.push).toHaveBeenCalledWith('/editor');
    });

    it("API 호출 후에 [id , 신랑 및 신부 정보 , 일자 , 등록한 사람] 항목이 있는 테이블이 노출되어야 한다.", async () => {
        await waitFor(() => {
            const idThead = screen.getByText(/id/i);
            expect(idThead).toBeInTheDocument();
        })
    })


})
