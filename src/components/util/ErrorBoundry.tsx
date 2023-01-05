import React from 'react';

interface Props {
  children: React.ReactNode;
}
export class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  /* eslint no-unused-vars: 0 */
  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.onUnhandledRejection);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.onUnhandledRejection);
  }

  onUnhandledRejection = (event: PromiseRejectionEvent) => {
    event.promise.catch((error) => {
      this.setState(ErrorBoundary.getDerivedStateFromError(error));
    });
  };

  // eslint-disable-next-line react/sort-comp
  componentDidCatch(error: any, errorInfo: any) {
    // eslint-disable-next-line no-console
    console.log('Unexpected error occurred!', error, errorInfo);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}
