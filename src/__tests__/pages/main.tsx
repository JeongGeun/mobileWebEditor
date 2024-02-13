import MainPage from '@/app/main/page'
import {render, fireEvent, screen} from '@testing-library/react'

test("Main 페이지의 타이틀이 모청 리스트 인지 확인한다.",()=>{
    render(<MainPage />)

    expect(screen.getByRole('heading')).toHaveTextContent("모청 리스트")
})