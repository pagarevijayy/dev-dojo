import React, { Component, ErrorInfo } from "react";
import { Link } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

type State = {
    hasErrors: boolean;
};

class ErrorBoundary extends Component<Props, State> {
    state = { hasErrors: false };

    static getDerivedStateFromError() {
        return { hasErrors: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // ideally log the message to a tracking service - perform an action
        console.error("ErrorBoundary component caught error", error, errorInfo);
    }

    render() {
        if (this.state.hasErrors) {
            return (
                <div className="text-center">
                    <h2>
                        There was an error. Something went wrong :(
                        <p>
                            <Link className="text-blue-500 mr-1" to="/">
                                Click here
                            </Link>
                            to go back to the home page.
                        </p>
                    </h2>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
