import MainPage from '@/app/main/page'
import { TestWrapper } from '@/util/test/wrapper';

import { render, fireEvent, screen } from '@testing-library/react'

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

test("Main 페이지의 타이틀이 모청 리스트 인지 확인한다.", () => {
    render(<MainPage />, { wrapper: TestWrapper() })
    const header = screen.getByRole('heading');
    expect(header).toHaveTextContent("모청 리스트")
})