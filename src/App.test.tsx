import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import App from "./App"
import store from "../src/app/redux"

describe("App", () => {
  test("renders App component", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const linkElement = getByText(/Recently Added/i)
    expect(linkElement).toBeInTheDocument()
  })
})
