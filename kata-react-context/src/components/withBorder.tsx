/* eslint-disable @typescript-eslint/no-explicit-any */
export default function withBorder(WrappedComponent: any) {
    return (props: any) => (
        <div className="border p-2 rounded">
            <WrappedComponent {...props} />
        </div>
    );
}
