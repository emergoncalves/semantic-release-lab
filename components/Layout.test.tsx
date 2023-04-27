import Layout from "./Layout";
import '@testing-library/jest-dom';
import { screen, render } from "@testing-library/react";

describe("Layout", () => {
    it("should render Home link", () => {
        render(<Layout>children</Layout>);
        expect(screen.getByText(/stay/i)).toBeInTheDocument();
    });
    }
);